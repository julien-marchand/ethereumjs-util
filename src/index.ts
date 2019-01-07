import BN = require('bn.js')
import rlp = require('rlp')
const createKeccakHash = require('keccak')
const secp256k1 = require('secp256k1')
const assert = require('assert')
const createHash = require('create-hash')
const Buffer = require('safe-buffer').Buffer
const ethjsUtil = require('ethjs-util')
Object.assign(exports, ethjsUtil)

// Types
export interface ECDSASignature {
  v: number
  r: Buffer
  s: Buffer
}

export type BufferableArray = number[] | ArrayBuffer | SharedArrayBuffer

export interface Arrayable {
  toArray(): BufferableArray
}

export type Bufferable =
  | Buffer
  | string
  | number
  | null
  | undefined
  | BN
  | BufferableArray
  | Arrayable

/**
 * the max integer that this VM can handle (a ```BN```)
 * @var {BN} MAX_INTEGER
 */
export const MAX_INTEGER = new BN(
  'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  16,
)

/**
 * 2^256 (a ```BN```)
 * @var {BN} TWO_POW256
 */
export const TWO_POW256 = new BN(
  '10000000000000000000000000000000000000000000000000000000000000000',
  16,
)

/**
 * Keccak-256 hash of null (a ```String```)
 * @var {String} KECCAK256_NULL_S
 */
export const KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'

/**
 * Keccak-256 hash of null (a ```Buffer```)
 * @var {Buffer} KECCAK256_NULL
 */
export const KECCAK256_NULL = Buffer.from(KECCAK256_NULL_S, 'hex')

/**
 * Keccak-256 of an RLP of an empty array (a ```String```)
 * @var {String} KECCAK256_RLP_ARRAY_S
 */
export const KECCAK256_RLP_ARRAY_S =
  '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'

/**
 * Keccak-256 of an RLP of an empty array (a ```Buffer```)
 * @var {Buffer} KECCAK256_RLP_ARRAY
 */
export const KECCAK256_RLP_ARRAY = Buffer.from(KECCAK256_RLP_ARRAY_S, 'hex')

/**
 * Keccak-256 hash of the RLP of null  (a ```String```)
 * @var {String} KECCAK256_RLP_S
 */
export const KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'

/**
 * Keccak-256 hash of the RLP of null (a ```Buffer```)
 * @var {Buffer} KECCAK256_RLP
 */
export const KECCAK256_RLP = Buffer.from(KECCAK256_RLP_S, 'hex')

/**
 * [`BN`](https://github.com/indutny/bn.js)
 * @var {Function}
 */
export { BN }

/**
 * [`rlp`](https://github.com/ethereumjs/rlp)
 * @var {Function}
 */
export { rlp }

/**
 * [`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)
 * @var {Object}
 */
export { secp256k1 }

/**
 * Returns a buffer filled with 0s
 * @method zeros
 * @param {Number} bytes  the number of bytes the buffer should be
 * @return {Buffer}
 */
export const zeros = function(bytes: number): Buffer {
  return Buffer.allocUnsafe(bytes).fill(0)
}

/**
 * Returns a zero address
 * @method zeroAddress
 * @return {String}
 */
export const zeroAddress = function(): string {
  const addressLength = 20
  const addr = zeros(addressLength)
  return bufferToHex(addr)
}

/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @method setLengthLeft
 * @param {Buffer|BufferableArray} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @param {Boolean} [right=false] whether to start padding form the left or right
 * @return {Buffer|Array}
 */
export const setLengthLeft = function(
  msg: Buffer | BufferableArray,
  length: number,
  right: boolean = false,
) {
  const buf = zeros(length)
  const msgBuf = toBuffer(msg)
  if (right) {
    if (msgBuf.length < length) {
      msgBuf.copy(buf)
      return buf
    }
    return msgBuf.slice(0, length)
  } else {
    if (msgBuf.length < length) {
      msgBuf.copy(buf, length - msgBuf.length)
      return buf
    }
    return msgBuf.slice(-length)
  }
}
export const setLength = setLengthLeft

/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param {Buffer|BufferableArray} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @return {Buffer|Array}
 */
export const setLengthRight = function(msg: Buffer | BufferableArray, length: number) {
  return setLength(msg, length, true)
}

/**
 * Trims leading zeros from a `Buffer` or an `Array`
 * @param {Buffer|Array|String} a
 * @return {Buffer|Array|String}
 */
export const unpad = function(a: any) {
  a = ethjsUtil.stripHexPrefix(a)
  let first = a[0]
  while (a.length > 0 && first.toString() === '0') {
    a = a.slice(1)
    first = a[0]
  }
  return a
}
export const stripZeros = unpad

/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param {*} v the value
 */
export const toBuffer = function(v: Bufferable): Buffer {
  if (Buffer.isBuffer(v)) {
    return <Buffer>v
  }

  let buf: Buffer
  if (Array.isArray(v)) {
    buf = Buffer.from(v)
  } else if (typeof v === 'string') {
    if (ethjsUtil.isHexString(v)) {
      buf = Buffer.from(ethjsUtil.padToEven(ethjsUtil.stripHexPrefix(v)), 'hex')
    } else {
      buf = Buffer.from(v)
    }
  } else if (typeof v === 'number') {
    buf = ethjsUtil.intToBuffer(v)
  } else if (v === null || v === undefined) {
    buf = Buffer.allocUnsafe(0)
  } else if (BN.isBN(v)) {
    buf = v.toArrayLike(Buffer)
  } else if ((<Arrayable>v).toArray) {
    // converts a BN to a Buffer
    buf = Buffer.from((<Arrayable>v).toArray())
  } else {
    throw new Error('invalid type')
  }

  return buf
}

/**
 * Converts a `Buffer` to a `Number`
 * @param {Buffer} buf
 * @return {Number}
 * @throws If the input number exceeds 53 bits.
 */
export const bufferToInt = function(buf: Buffer): number {
  return new BN(toBuffer(buf)).toNumber()
}

/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */
export const bufferToHex = function(buf: Buffer): string {
  buf = toBuffer(buf)
  return '0x' + buf.toString('hex')
}

/**
 * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
 * @param {Buffer} num
 * @return {BN}
 */
export const fromSigned = function(num: Buffer): BN {
  return new BN(num).fromTwos(256)
}

/**
 * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param {BN} num
 * @return {Buffer}
 */
export const toUnsigned = function(num: BN): Buffer {
  return Buffer.from(num.toTwos(256).toArray())
}

/**
 * Creates Keccak hash of the input
 * @param {Bufferable} a the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
export const keccak = function(a: Bufferable, bits: number = 256): Buffer {
  const buf = toBuffer(a)
  if (!bits) bits = 256

  return createKeccakHash(`keccak${bits}`)
    .update(buf)
    .digest()
}

/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256)
 * @param {Bufferable} a the input data
 * @return {Buffer}
 */
export const keccak256 = function(a: Bufferable): Buffer {
  return keccak(a)
}

/**
 * Creates SHA256 hash of the input
 * @param {Bufferable} a the input data
 * @return {Buffer}
 */
export const sha256 = function(a: Bufferable): Buffer {
  const buf = toBuffer(a)
  return createHash('sha256')
    .update(buf)
    .digest()
}

/**
 * Creates RIPEMD160 hash of the input
 * @param {Bufferable} a the input data
 * @param {Boolean} padded whether it should be padded to 256 bits or not
 * @return {Buffer}
 */
export const ripemd160 = function(a: Bufferable, padded: boolean): Buffer {
  const buf = toBuffer(a)
  const hash = createHash('rmd160')
    .update(buf)
    .digest()
  if (padded === true) {
    return setLength(hash, 32)
  } else {
    return hash
  }
}

/**
 * Creates SHA-3 hash of the RLP encoded version of the input
 * @param {rlp.Input} a the input data
 * @return {Buffer}
 */
export const rlphash = function(a: rlp.Input): Buffer {
  return keccak(rlp.encode(a))
}

/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 * @param {Buffer} privateKey
 * @return {Boolean}
 */
export const isValidPrivate = function(privateKey: Buffer): boolean {
  return secp256k1.privateKeyVerify(privateKey)
}

/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param {Buffer} publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param {Boolean} [sanitize=false] Accept public keys in other formats
 * @return {Boolean}
 */
export const isValidPublic = function(publicKey: Buffer, sanitize: boolean = false): boolean {
  if (publicKey.length === 64) {
    // Convert to SEC1 for secp256k1
    return secp256k1.publicKeyVerify(Buffer.concat([Buffer.from([4]), publicKey]))
  }

  if (!sanitize) {
    return false
  }

  return secp256k1.publicKeyVerify(publicKey)
}

/**
 * Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param {Buffer} pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param {Boolean} [sanitize=false] Accept public keys in other formats
 * @return {Buffer}
 */
export const pubToAddress = function(pubKey: Buffer, sanitize: boolean = false): Buffer {
  pubKey = toBuffer(pubKey)
  if (sanitize && pubKey.length !== 64) {
    pubKey = secp256k1.publicKeyConvert(pubKey, false).slice(1)
  }
  assert(pubKey.length === 64)
  // Only take the lower 160bits of the hash
  return keccak(pubKey).slice(-20)
}
export const publicToAddress = pubToAddress

/**
 * Returns the ethereum public key of a given private key
 * @param {Buffer} privateKey A private key must be 256 bits wide
 * @return {Buffer}
 */
export const privateToPublic = function(privateKey: Buffer): Buffer {
  privateKey = toBuffer(privateKey)
  // skip the type flag and use the X, Y points
  return secp256k1.publicKeyCreate(privateKey, false).slice(1)
}

/**
 * Converts a public key to the Ethereum format.
 * @param {Buffer} publicKey
 * @return {Buffer}
 */
export const importPublic = function(publicKey: Buffer): Buffer {
  publicKey = toBuffer(publicKey)
  if (publicKey.length !== 64) {
    publicKey = secp256k1.publicKeyConvert(publicKey, false).slice(1)
  }
  return publicKey
}

/**
 * ECDSA sign
 * @param {Buffer} msgHash
 * @param {Buffer} privateKey
 * @param {Number} [chainId]
 * @return {ECDSASignature}
 */
export const ecsign = function(
  msgHash: Buffer,
  privateKey: Buffer,
  chainId: number,
): ECDSASignature {
  const sig = secp256k1.sign(msgHash, privateKey)
  const recovery: number = sig.recovery

  const ret = {
    r: sig.signature.slice(0, 32),
    s: sig.signature.slice(32, 64),
    v: chainId ? recovery + (chainId * 2 + 35) : recovery + 27,
  }

  return ret
}

/**
 * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
 * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
 * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
 * used to produce the signature.
 * @param message
 * @returns {Buffer} hash
 */
export const hashPersonalMessage = function(message: any): Buffer {
  const prefix = toBuffer(`\u0019Ethereum Signed Message:\n${message.length.toString()}`)
  return keccak(Buffer.concat([prefix, message]))
}

/**
 * ECDSA public key recovery from signature
 * @param {Buffer} msgHash
 * @param {Number} v
 * @param {Buffer} r
 * @param {Buffer} s
 * @param {Number} [chainId]
 * @return {Buffer} publicKey
 */
export const ecrecover = function(
  msgHash: Buffer,
  v: number,
  r: Buffer,
  s: Buffer,
  chainId: number,
): Buffer {
  const signature = Buffer.concat([setLength(r, 32), setLength(s, 32)], 64)
  const recovery = calculateSigRecovery(v, chainId)
  if (!isValidSigRecovery(recovery)) {
    throw new Error('Invalid signature v value')
  }
  const senderPubKey = secp256k1.recover(msgHash, signature, recovery)
  return secp256k1.publicKeyConvert(senderPubKey, false).slice(1)
}

/**
 * Convert signature parameters into the format of `eth_sign` RPC method
 * @param {Number} v
 * @param {Buffer} r
 * @param {Buffer} s
 * @param {Number} [chainId]
 * @return {String} sig
 */
export const toRpcSig = function(v: number, r: Buffer, s: Buffer, chainId: number): string {
  const recovery = calculateSigRecovery(v, chainId)
  if (!isValidSigRecovery(recovery)) {
    throw new Error('Invalid signature v value')
  }

  // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
  return bufferToHex(Buffer.concat([setLengthLeft(r, 32), setLengthLeft(s, 32), toBuffer(v)]))
}

/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
 * @param {String} sig
 * @return {ECDSASignature}
 */
export const fromRpcSig = function(sig: string): ECDSASignature {
  const buf: Buffer = toBuffer(sig)

  // NOTE: with potential introduction of chainId this might need to be updated
  if (buf.length !== 65) {
    throw new Error('Invalid signature length')
  }

  let v = buf[64]
  // support both versions of `eth_sign` responses
  if (v < 27) {
    v += 27
  }

  return {
    v: v,
    r: buf.slice(0, 32),
    s: buf.slice(32, 64),
  }
}

/**
 * Returns the ethereum address of a given private key
 * @param {Buffer} privateKey A private key must be 256 bits wide
 * @return {Buffer}
 */
export const privateToAddress = function(privateKey: Buffer): Buffer {
  return publicToAddress(privateToPublic(privateKey))
}

/**
 * Checks if the address is a valid. Accepts checksummed addresses too
 * @param {String} address
 * @return {Boolean}
 */
export const isValidAddress = function(address: string): boolean {
  return /^0x[0-9a-fA-F]{40}$/.test(address)
}

/**
 * Checks if a given address is a zero address
 * @method isZeroAddress
 * @param {String} address
 * @return {Boolean}
 */
export const isZeroAddress = function(address: string): boolean {
  const zeroAddr = zeroAddress()
  return zeroAddr === addHexPrefix(address)
}

/**
 * Returns a checksummed address
 * @param {String} address
 * @return {String}
 */
export const toChecksumAddress = function(address: string): string {
  address = ethjsUtil.stripHexPrefix(address).toLowerCase()
  const hash = keccak(address).toString('hex')
  let ret = '0x'

  for (let i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase()
    } else {
      ret += address[i]
    }
  }

  return ret
}

/**
 * Checks if the address is a valid checksummed address
 * @param {Buffer} address
 * @return {Boolean}
 */
export const isValidChecksumAddress = function(address: string): boolean {
  return isValidAddress(address) && toChecksumAddress(address) === address
}

/**
 * Generates an address of a newly created contract
 * @param {Buffer} from the address which is creating this new address
 * @param {Buffer} nonce the nonce of the from account
 * @return {Buffer}
 */
export const generateAddress = function(from: Buffer, nonce: Buffer): Buffer {
  from = toBuffer(from)

  if (new BN(nonce).isZero()) {
    // in RLP we want to encode null in the case of zero nonce
    // read the RLP documentation for an answer if you dare
    return rlphash([from, null]).slice(-20)
  }

  // Only take the lower 160bits of the hash
  return rlphash([from, nonce]).slice(-20)
}

/**
 * Generates an address for a contract created using CREATE2
 * @param {Buffer|String} from the address which is creating this new address
 * @param {Buffer|String} salt a salt
 * @param {Buffer|String} initCode the init code of the contract being created
 * @return {Buffer}
 */
export const generateAddress2 = function(
  from: Buffer | string,
  salt: Buffer | string,
  initCode: Buffer | string,
): Buffer {
  const fromBuf = toBuffer(from)
  const saltBuf = toBuffer(salt)
  const initCodeBuf = toBuffer(initCode)

  assert(fromBuf.length === 20)
  assert(saltBuf.length === 32)

  const address = keccak256(
    Buffer.concat([Buffer.from('ff', 'hex'), fromBuf, saltBuf, keccak256(initCodeBuf)]),
  )

  return address.slice(-20)
}

/**
 * Returns true if the supplied address belongs to a precompiled account (Byzantium)
 * @param {Buffer|String} address
 * @return {Boolean}
 */
export const isPrecompiled = function(address: Buffer | string): boolean {
  const a = unpad(address)
  return a.length === 1 && a[0] >= 1 && a[0] <= 8
}

/**
 * Adds "0x" to a given `String` if it does not already start with "0x"
 * @param {String} str
 * @return {String}
 */
export const addHexPrefix = function(str: string): string {
  if (typeof str !== 'string') {
    return str
  }

  return ethjsUtil.isHexPrefixed(str) ? str : '0x' + str
}

/**
 * Validate ECDSA signature
 * @method isValidSignature
 * @param {Number} v
 * @param {Buffer} r
 * @param {Buffer} s
 * @param {Boolean} [homestead=true]
 * @param {Number} [chainId]
 * @return {Boolean}
 */

export const isValidSignature = function(
  v: number,
  r: Buffer,
  s: Buffer,
  homestead: boolean = true,
  chainId: number,
): boolean {
  const SECP256K1_N_DIV_2 = new BN(
    '7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0',
    16,
  )
  const SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16)

  if (r.length !== 32 || s.length !== 32) {
    return false
  }

  if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
    return false
  }

  const rBN: BN = new BN(r)
  const sBN: BN = new BN(s)

  if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
    return false
  }

  if (homestead === false && new BN(s).cmp(SECP256K1_N_DIV_2) === 1) {
    return false
  }

  return true
}

/**
 * Converts a `Buffer` or `Array` to JSON
 * @param {Buffer|Array} ba
 * @return {Array|String|null}
 */
export const baToJSON = function(ba: any) {
  if (Buffer.isBuffer(ba)) {
    return `0x${ba.toString('hex')}`
  } else if (ba instanceof Array) {
    const array = []
    for (let i = 0; i < ba.length; i++) {
      array.push(exports.baToJSON(ba[i]))
    }
    return array
  }
}

/**
 * Defines properties on a `Object`. It make the assumption that underlying data is binary.
 * @param {Object} self the `Object` to define properties on
 * @param {Array} fields an array fields to define. Fields can contain:
 * * `name` - the name of the properties
 * * `length` - the number of bytes the field can have
 * * `allowLess` - if the field can be less than the length
 * * `allowEmpty`
 * @param {*} data data to be validated against the definitions
 */
export const defineProperties = function(self: any, fields: any, data: any) {
  self.raw = []
  self._fields = []

  // attach the `toJSON`
  self.toJSON = function(label: boolean = false) {
    if (label) {
      type Dict = { [key: string]: string }
      const obj: Dict = {}
      self._fields.forEach((field: string) => {
        obj[field] = `0x${self[field].toString('hex')}`
      })
      return obj
    }
    return baToJSON(self.raw)
  }

  self.serialize = function serialize() {
    return rlp.encode(self.raw)
  }

  fields.forEach((field: any, i: number) => {
    self._fields.push(field.name)
    function getter() {
      return self.raw[i]
    }
    function setter(v: any) {
      v = toBuffer(v)

      if (v.toString('hex') === '00' && !field.allowZero) {
        v = Buffer.allocUnsafe(0)
      }

      if (field.allowLess && field.length) {
        v = stripZeros(v)
        assert(
          field.length >= v.length,
          `The field ${field.name} must not have more ${field.length} bytes`,
        )
      } else if (!(field.allowZero && v.length === 0) && field.length) {
        assert(
          field.length === v.length,
          `The field ${field.name} must have byte length of ${field.length}`,
        )
      }

      self.raw[i] = v
    }

    Object.defineProperty(self, field.name, {
      enumerable: true,
      configurable: true,
      get: getter,
      set: setter,
    })

    if (field.default) {
      self[field.name] = field.default
    }

    // attach alias
    if (field.alias) {
      Object.defineProperty(self, field.alias, {
        enumerable: false,
        configurable: true,
        set: setter,
        get: getter,
      })
    }
  })

  // if the constuctor is passed data
  if (data) {
    if (typeof data === 'string') {
      data = Buffer.from(ethjsUtil.stripHexPrefix(data), 'hex')
    }

    if (Buffer.isBuffer(data)) {
      data = rlp.decode(data)
    }

    if (Array.isArray(data)) {
      if (data.length > self._fields.length) {
        throw new Error('wrong number of fields in data')
      }

      // make sure all the items are buffers
      data.forEach((d, i) => {
        self[self._fields[i]] = toBuffer(d)
      })
    } else if (typeof data === 'object') {
      const keys = Object.keys(data)
      fields.forEach((field: any) => {
        if (keys.indexOf(field.name) !== -1) self[field.name] = data[field.name]
        if (keys.indexOf(field.alias) !== -1) self[field.alias] = data[field.alias]
      })
    } else {
      throw new Error('invalid data')
    }
  }
}

function calculateSigRecovery(v: number, chainId: number): number {
  return chainId ? v - (2 * chainId + 35) : v - 27
}

function isValidSigRecovery(recovery: number): boolean {
  return recovery === 0 || recovery === 1
}
