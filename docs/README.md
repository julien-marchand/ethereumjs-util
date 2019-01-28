
#  ethereumjs-util

## Index

### Interfaces

* [Arrayable](interfaces/arrayable.md)
* [ECDSASignature](interfaces/ecdsasignature.md)

### Type aliases

* [Bufferable](#bufferable)
* [BufferableArray](#bufferablearray)

### Variables

* [Buffer](#buffer)
* [KECCAK256_NULL](#keccak256_null)
* [KECCAK256_NULL_S](#keccak256_null_s)
* [KECCAK256_RLP](#keccak256_rlp)
* [KECCAK256_RLP_ARRAY](#keccak256_rlp_array)
* [KECCAK256_RLP_ARRAY_S](#keccak256_rlp_array_s)
* [KECCAK256_RLP_S](#keccak256_rlp_s)
* [MAX_INTEGER](#max_integer)
* [TWO_POW256](#two_pow256)
* [assert](#assert)
* [createHash](#createhash)
* [createKeccakHash](#createkeccakhash)
* [ethjsUtil](#ethjsutil)
* [publicToAddress](#publictoaddress)
* [secp256k1](#secp256k1)
* [setLength](#setlength)
* [stripZeros](#stripzeros)

### Functions

* [addHexPrefix](#addhexprefix)
* [baToJSON](#batojson)
* [bufferToHex](#buffertohex)
* [bufferToInt](#buffertoint)
* [calculateSigRecovery](#calculatesigrecovery)
* [defineProperties](#defineproperties)
* [ecrecover](#ecrecover)
* [ecsign](#ecsign)
* [fromRpcSig](#fromrpcsig)
* [fromSigned](#fromsigned)
* [generateAddress](#generateaddress)
* [generateAddress2](#generateaddress2)
* [hashPersonalMessage](#hashpersonalmessage)
* [importPublic](#importpublic)
* [isPrecompiled](#isprecompiled)
* [isValidAddress](#isvalidaddress)
* [isValidChecksumAddress](#isvalidchecksumaddress)
* [isValidPrivate](#isvalidprivate)
* [isValidPublic](#isvalidpublic)
* [isValidSigRecovery](#isvalidsigrecovery)
* [isValidSignature](#isvalidsignature)
* [isZeroAddress](#iszeroaddress)
* [keccak](#keccak)
* [keccak256](#keccak256)
* [privateToAddress](#privatetoaddress)
* [privateToPublic](#privatetopublic)
* [pubToAddress](#pubtoaddress)
* [ripemd160](#ripemd160)
* [rlphash](#rlphash)
* [setLengthLeft](#setlengthleft)
* [setLengthRight](#setlengthright)
* [sha256](#sha256)
* [toBuffer](#tobuffer)
* [toChecksumAddress](#tochecksumaddress)
* [toRpcSig](#torpcsig)
* [toUnsigned](#tounsigned)
* [unpad](#unpad)
* [zeroAddress](#zeroaddress)
* [zeros](#zeros)

---

## Type aliases

<a id="bufferable"></a>

###  Bufferable

**Ƭ Bufferable**: *`Buffer` | `string` | `number` | `null` | `undefined` | `BN` | [BufferableArray](#bufferablearray) | [Arrayable](interfaces/arrayable.md)*

*Defined in [index.ts:24](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L24)*

___
<a id="bufferablearray"></a>

###  BufferableArray

**Ƭ BufferableArray**: *`number`[] | `ArrayBuffer` | `SharedArrayBuffer`*

*Defined in [index.ts:18](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L18)*

___

## Variables

<a id="buffer"></a>

### `<Const>` Buffer

**● Buffer**: *`any`* =  require('safe-buffer').Buffer

*Defined in [index.ts:7](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L7)*

___
<a id="keccak256_null"></a>

### `<Const>` KECCAK256_NULL

**● KECCAK256_NULL**: *`Buffer`* =  Buffer.from(KECCAK256_NULL_S, 'hex')

*Defined in [index.ts:59](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L59)*

Keccak-256 hash of null

___
<a id="keccak256_null_s"></a>

### `<Const>` KECCAK256_NULL_S

**● KECCAK256_NULL_S**: *`string`* = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"

*Defined in [index.ts:53](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L53)*

Keccak-256 hash of null

___
<a id="keccak256_rlp"></a>

### `<Const>` KECCAK256_RLP

**● KECCAK256_RLP**: *`Buffer`* =  Buffer.from(KECCAK256_RLP_S, 'hex')

*Defined in [index.ts:81](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L81)*

Keccak-256 hash of the RLP of null

___
<a id="keccak256_rlp_array"></a>

### `<Const>` KECCAK256_RLP_ARRAY

**● KECCAK256_RLP_ARRAY**: *`Buffer`* =  Buffer.from(KECCAK256_RLP_ARRAY_S, 'hex')

*Defined in [index.ts:70](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L70)*

Keccak-256 of an RLP of an empty array

___
<a id="keccak256_rlp_array_s"></a>

### `<Const>` KECCAK256_RLP_ARRAY_S

**● KECCAK256_RLP_ARRAY_S**: *`string`* = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"

*Defined in [index.ts:64](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L64)*

Keccak-256 of an RLP of an empty array

___
<a id="keccak256_rlp_s"></a>

### `<Const>` KECCAK256_RLP_S

**● KECCAK256_RLP_S**: *`string`* = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"

*Defined in [index.ts:75](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L75)*

Keccak-256 hash of the RLP of null

___
<a id="max_integer"></a>

### `<Const>` MAX_INTEGER

**● MAX_INTEGER**: *`BN`* =  new BN(
  'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  16,
)

*Defined in [index.ts:37](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L37)*

The max integer that this VM can handle

___
<a id="two_pow256"></a>

### `<Const>` TWO_POW256

**● TWO_POW256**: *`BN`* =  new BN(
  '10000000000000000000000000000000000000000000000000000000000000000',
  16,
)

*Defined in [index.ts:45](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L45)*

2^256

___
<a id="assert"></a>

### `<Const>` assert

**● assert**: *`any`* =  require('assert')

*Defined in [index.ts:5](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L5)*

___
<a id="createhash"></a>

### `<Const>` createHash

**● createHash**: *`any`* =  require('create-hash')

*Defined in [index.ts:6](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L6)*

___
<a id="createkeccakhash"></a>

### `<Const>` createKeccakHash

**● createKeccakHash**: *`any`* =  require('keccak')

*Defined in [index.ts:3](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L3)*

___
<a id="ethjsutil"></a>

### `<Const>` ethjsUtil

**● ethjsUtil**: *`any`* =  require('ethjs-util')

*Defined in [index.ts:8](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L8)*

___
<a id="publictoaddress"></a>

### `<Const>` publicToAddress

**● publicToAddress**: *[pubToAddress]()* =  pubToAddress

*Defined in [index.ts:340](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L340)*

___
<a id="secp256k1"></a>

### `<Const>` secp256k1

**● secp256k1**: *`any`* =  require('secp256k1')

*Defined in [index.ts:4](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L4)*

___
<a id="setlength"></a>

### `<Const>` setLength

**● setLength**: *[setLengthLeft]()* =  setLengthLeft

*Defined in [index.ts:144](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L144)*

___
<a id="stripzeros"></a>

### `<Const>` stripZeros

**● stripZeros**: *[unpad]()* =  unpad

*Defined in [index.ts:171](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L171)*

___

## Functions

<a id="addhexprefix"></a>

### `<Const>` addHexPrefix

▸ **addHexPrefix**(str: *`string`*): `string`

*Defined in [index.ts:556](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L556)*

Adds "0x" to a given `String` if it does not already start with "0x".

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `string`

___
<a id="batojson"></a>

### `<Const>` baToJSON

▸ **baToJSON**(ba: *`any`*): `undefined` | `string` | `any`[]

*Defined in [index.ts:608](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L608)*

Converts a `Buffer` or `Array` to JSON.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ba | `any` |  \- |

**Returns:** `undefined` | `string` | `any`[]

___
<a id="buffertohex"></a>

### `<Const>` bufferToHex

▸ **bufferToHex**(buf: *`Buffer`*): `string`

*Defined in [index.ts:220](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L220)*

Converts a `Buffer` into a hex `String`.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  \`Buffer\` object to convert |

**Returns:** `string`

___
<a id="buffertoint"></a>

### `<Const>` bufferToInt

▸ **bufferToInt**(buf: *`Buffer`*): `number`

*Defined in [index.ts:212](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L212)*

Converts a `Buffer` to a `Number`.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  \`Buffer\` object to convert |

**Returns:** `number`

___
<a id="calculatesigrecovery"></a>

###  calculateSigRecovery

▸ **calculateSigRecovery**(v: *`number`*, chainId?: *`undefined` | `number`*): `number`

*Defined in [index.ts:732](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L732)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |
| `Optional` chainId | `undefined` | `number` |

**Returns:** `number`

___
<a id="defineproperties"></a>

### `<Const>` defineProperties

▸ **defineProperties**(self: *`any`*, fields: *`any`*, data: *`any`*): `void`

*Defined in [index.ts:630](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L630)*

Defines properties on a `Object`. It make the assumption that underlying data is binary.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| self | `any` |  the \`Object\` to define properties on |
| fields | `any` |  an array fields to define. Fields can contain:*   \`name\` - the name of the properties*   \`length\` - the number of bytes the field can have*   \`allowLess\` - if the field can be less than the length*   \`allowEmpty\` |
| data | `any` |  data to be validated against the definitions |

**Returns:** `void`

___
<a id="ecrecover"></a>

### `<Const>` ecrecover

▸ **ecrecover**(msgHash: *`Buffer`*, v: *`number`*, r: *`Buffer`*, s: *`Buffer`*, chainId?: *`undefined` | `number`*): `Buffer`

*Defined in [index.ts:398](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L398)*

ECDSA public key recovery from signature.

**Parameters:**

| Name | Type |
| ------ | ------ |
| msgHash | `Buffer` |
| v | `number` |
| r | `Buffer` |
| s | `Buffer` |
| `Optional` chainId | `undefined` | `number` |

**Returns:** `Buffer`
Recovered public key

___
<a id="ecsign"></a>

### `<Const>` ecsign

▸ **ecsign**(msgHash: *`Buffer`*, privateKey: *`Buffer`*, chainId?: *`undefined` | `number`*): [ECDSASignature](interfaces/ecdsasignature.md)

*Defined in [index.ts:366](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L366)*

Returns the ECDSA signature of a message hash.

**Parameters:**

| Name | Type |
| ------ | ------ |
| msgHash | `Buffer` |
| privateKey | `Buffer` |
| `Optional` chainId | `undefined` | `number` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

___
<a id="fromrpcsig"></a>

### `<Const>` fromRpcSig

▸ **fromRpcSig**(sig: *`string`*): [ECDSASignature](interfaces/ecdsasignature.md)

*Defined in [index.ts:432](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L432)*

Convert signature format of the `eth_sign` RPC method to signature parameters NOTE: all because of a bug in geth: [https://github.com/ethereum/go-ethereum/issues/2053](https://github.com/ethereum/go-ethereum/issues/2053)

**Parameters:**

| Name | Type |
| ------ | ------ |
| sig | `string` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

___
<a id="fromsigned"></a>

### `<Const>` fromSigned

▸ **fromSigned**(num: *`Buffer`*): `BN`

*Defined in [index.ts:229](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L229)*

Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| num | `Buffer` |  Signed integer value |

**Returns:** `BN`

___
<a id="generateaddress"></a>

### `<Const>` generateAddress

▸ **generateAddress**(from: *`Buffer`*, nonce: *`Buffer`*): `Buffer`

*Defined in [index.ts:507](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L507)*

Generates an address of a newly created contract.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `Buffer` |  The address which is creating this new address |
| nonce | `Buffer` |  The nonce of the from account |

**Returns:** `Buffer`

___
<a id="generateaddress2"></a>

### `<Const>` generateAddress2

▸ **generateAddress2**(from: *`Buffer` | `string`*, salt: *`Buffer` | `string`*, initCode: *`Buffer` | `string`*): `Buffer`

*Defined in [index.ts:526](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L526)*

Generates an address for a contract created using CREATE2.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `Buffer` | `string` |  The address which is creating this new address |
| salt | `Buffer` | `string` |  A salt |
| initCode | `Buffer` | `string` |  The init code of the contract being created |

**Returns:** `Buffer`

___
<a id="hashpersonalmessage"></a>

### `<Const>` hashPersonalMessage

▸ **hashPersonalMessage**(message: *`any`*): `Buffer`

*Defined in [index.ts:389](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L389)*

Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call. The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign` call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key used to produce the signature.

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `any` |

**Returns:** `Buffer`

___
<a id="importpublic"></a>

### `<Const>` importPublic

▸ **importPublic**(publicKey: *`Buffer`*): `Buffer`

*Defined in [index.ts:355](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L355)*

Converts a public key to the Ethereum format.

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Buffer` |

**Returns:** `Buffer`

___
<a id="isprecompiled"></a>

### `<Const>` isPrecompiled

▸ **isPrecompiled**(address: *`Buffer` | `string`*): `boolean`

*Defined in [index.ts:548](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L548)*

Returns true if the supplied address belongs to a precompiled account (Byzantium).

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `Buffer` | `string` |

**Returns:** `boolean`

___
<a id="isvalidaddress"></a>

### `<Const>` isValidAddress

▸ **isValidAddress**(address: *`string`*): `boolean`

*Defined in [index.ts:464](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L464)*

Checks if the address is a valid. Accepts checksummed addresses too.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `boolean`

___
<a id="isvalidchecksumaddress"></a>

### `<Const>` isValidChecksumAddress

▸ **isValidChecksumAddress**(address: *`string`*): `boolean`

*Defined in [index.ts:498](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L498)*

Checks if the address is a valid checksummed address.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `boolean`

___
<a id="isvalidprivate"></a>

### `<Const>` isValidPrivate

▸ **isValidPrivate**(privateKey: *`Buffer`*): `boolean`

*Defined in [index.ts:302](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L302)*

Checks if the private key satisfies the rules of the curve secp256k1.

**Parameters:**

| Name | Type |
| ------ | ------ |
| privateKey | `Buffer` |

**Returns:** `boolean`

___
<a id="isvalidpublic"></a>

### `<Const>` isValidPublic

▸ **isValidPublic**(publicKey: *`Buffer`*, sanitize?: *`boolean`*): `boolean`

*Defined in [index.ts:312](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L312)*

Checks if the public key satisfies the rules of the curve secp256k1 and the requirements of Ethereum.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| publicKey | `Buffer` | - |  The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false |  Accept public keys in other formats |

**Returns:** `boolean`

___
<a id="isvalidsigrecovery"></a>

###  isValidSigRecovery

▸ **isValidSigRecovery**(recovery: *`number`*): `boolean`

*Defined in [index.ts:736](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L736)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| recovery | `number` |

**Returns:** `boolean`

___
<a id="isvalidsignature"></a>

### `<Const>` isValidSignature

▸ **isValidSignature**(v: *`number`*, r: *`Buffer`*, s: *`Buffer`*, homestead?: *`boolean`*, chainId?: *`undefined` | `number`*): `boolean`

*Defined in [index.ts:568](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L568)*

Validate a ECDSA signature.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| v | `number` | - |
| r | `Buffer` | - |
| s | `Buffer` | - |
| `Default value` homestead | `boolean` | true |
| `Optional` chainId | `undefined` | `number` | - |

**Returns:** `boolean`

___
<a id="iszeroaddress"></a>

### `<Const>` isZeroAddress

▸ **isZeroAddress**(address: *`string`*): `boolean`

*Defined in [index.ts:471](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L471)*

Checks if a given address is a zero address.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `boolean`

___
<a id="keccak"></a>

### `<Const>` keccak

▸ **keccak**(a: *[Bufferable](#bufferable)*, bits?: *`number`*): `Buffer`

*Defined in [index.ts:246](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L246)*

Creates Keccak hash of the input

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [Bufferable](#bufferable) | - |  The input data |
| `Default value` bits | `number` | 256 |  The Keccak width |

**Returns:** `Buffer`

___
<a id="keccak256"></a>

### `<Const>` keccak256

▸ **keccak256**(a: *[Bufferable](#bufferable)*): `Buffer`

*Defined in [index.ts:259](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L259)*

Creates Keccak-256 hash of the input, alias for keccak(a, 256).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | [Bufferable](#bufferable) |  The input data |

**Returns:** `Buffer`

___
<a id="privatetoaddress"></a>

### `<Const>` privateToAddress

▸ **privateToAddress**(privateKey: *`Buffer`*): `Buffer`

*Defined in [index.ts:457](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L457)*

Returns the ethereum address of a given private key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** `Buffer`

___
<a id="privatetopublic"></a>

### `<Const>` privateToPublic

▸ **privateToPublic**(privateKey: *`Buffer`*): `Buffer`

*Defined in [index.ts:346](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L346)*

Returns the ethereum public key of a given private key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** `Buffer`

___
<a id="pubtoaddress"></a>

### `<Const>` pubToAddress

▸ **pubToAddress**(pubKey: *`Buffer`*, sanitize?: *`boolean`*): `Buffer`

*Defined in [index.ts:331](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L331)*

Returns the ethereum address of a given public key. Accepts "Ethereum public keys" and SEC1 encoded keys.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pubKey | `Buffer` | - |  The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false |  Accept public keys in other formats |

**Returns:** `Buffer`

___
<a id="ripemd160"></a>

### `<Const>` ripemd160

▸ **ripemd160**(a: *[Bufferable](#bufferable)*, padded: *`boolean`*): `Buffer`

*Defined in [index.ts:279](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L279)*

Creates RIPEMD160 hash of the input.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | [Bufferable](#bufferable) |  The input data |
| padded | `boolean` |  Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

___
<a id="rlphash"></a>

### `<Const>` rlphash

▸ **rlphash**(a: *`rlp.Input`*): `Buffer`

*Defined in [index.ts:295](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L295)*

Creates SHA-3 hash of the RLP encoded version of the input.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `rlp.Input` |  The input data |

**Returns:** `Buffer`

___
<a id="setlengthleft"></a>

### `<Const>` setLengthLeft

▸ **setLengthLeft**(msg: *`Buffer` | [BufferableArray](#bufferablearray)*, length: *`number`*, right?: *`boolean`*): `Buffer`

*Defined in [index.ts:123](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L123)*

Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes. Or it truncates the beginning if it exceeds.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| msg | `Buffer` | [BufferableArray](#bufferablearray) | - |  the value to pad |
| length | `number` | - |  the number of bytes the output should be |
| `Default value` right | `boolean` | false |  whether to start padding form the left or right |

**Returns:** `Buffer`

___
<a id="setlengthright"></a>

### `<Const>` setLengthRight

▸ **setLengthRight**(msg: *`Buffer` | [BufferableArray](#bufferablearray)*, length: *`number`*): `Buffer`

*Defined in [index.ts:153](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L153)*

Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes. Or it truncates the beginning if it exceeds.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| msg | `Buffer` | [BufferableArray](#bufferablearray) |  the value to pad |
| length | `number` |  the number of bytes the output should be |

**Returns:** `Buffer`

___
<a id="sha256"></a>

### `<Const>` sha256

▸ **sha256**(a: *[Bufferable](#bufferable)*): `Buffer`

*Defined in [index.ts:267](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L267)*

Creates SHA256 hash of the input.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | [Bufferable](#bufferable) |  The input data |

**Returns:** `Buffer`

___
<a id="tobuffer"></a>

### `<Const>` toBuffer

▸ **toBuffer**(v: *[Bufferable](#bufferable)*): `Buffer`

*Defined in [index.ts:177](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L177)*

Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| v | [Bufferable](#bufferable) |  the value |

**Returns:** `Buffer`

___
<a id="tochecksumaddress"></a>

### `<Const>` toChecksumAddress

▸ **toChecksumAddress**(address: *`string`*): `string`

*Defined in [index.ts:479](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L479)*

Returns a checksummed address.

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `string`

___
<a id="torpcsig"></a>

### `<Const>` toRpcSig

▸ **toRpcSig**(v: *`number`*, r: *`Buffer`*, s: *`Buffer`*, chainId?: *`undefined` | `number`*): `string`

*Defined in [index.ts:418](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L418)*

Convert signature parameters into the format of `eth_sign` RPC method.

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |
| r | `Buffer` |
| s | `Buffer` |
| `Optional` chainId | `undefined` | `number` |

**Returns:** `string`
Signature

___
<a id="tounsigned"></a>

### `<Const>` toUnsigned

▸ **toUnsigned**(num: *`BN`*): `Buffer`

*Defined in [index.ts:237](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L237)*

Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| num | `BN` |   |

**Returns:** `Buffer`

___
<a id="unpad"></a>

### `<Const>` unpad

▸ **unpad**(a: *`any`*): `any`

*Defined in [index.ts:162](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L162)*

Trims leading zeros from a `Buffer` or an `Array`.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `any` |  \- |

**Returns:** `any`

___
<a id="zeroaddress"></a>

### `<Const>` zeroAddress

▸ **zeroAddress**(): `string`

*Defined in [index.ts:109](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L109)*

Returns a zero address.

**Returns:** `string`

___
<a id="zeros"></a>

### `<Const>` zeros

▸ **zeros**(bytes: *`number`*): `Buffer`

*Defined in [index.ts:102](https://github.com/ethereumjs/ethereumjs-util/blob/7c167cb/src/index.ts#L102)*

Returns a buffer filled with 0s.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bytes | `number` |  the number of bytes the buffer should be |

**Returns:** `Buffer`

___

