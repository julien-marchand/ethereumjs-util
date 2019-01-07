
#  ethereumjs-util

## Index

### Interfaces

* [ECDSASignature](interfaces/ecdsasignature.md)

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
* [rlp](#rlp)
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

## Variables

<a id="buffer"></a>

### `<Const>` Buffer

**● Buffer**: *`any`* =  require('safe-buffer').Buffer

*Defined in [index.ts:7](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L7)*

___
<a id="keccak256_null"></a>

### `<Const>` KECCAK256_NULL

**● KECCAK256_NULL**: *`any`* =  Buffer.from(KECCAK256_NULL_S, 'hex')

*Defined in [index.ts:39](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L39)*

Keccak-256 hash of null (a `Buffer`)
*__var__*: {Buffer} KECCAK256\_NULL

___
<a id="keccak256_null_s"></a>

### `<Const>` KECCAK256_NULL_S

**● KECCAK256_NULL_S**: *"c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"* = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"

*Defined in [index.ts:33](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L33)*

Keccak-256 hash of null (a `String`)
*__var__*: {String} KECCAK256\_NULL\_S

___
<a id="keccak256_rlp"></a>

### `<Const>` KECCAK256_RLP

**● KECCAK256_RLP**: *`any`* =  Buffer.from(KECCAK256_RLP_S, 'hex')

*Defined in [index.ts:64](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L64)*

Keccak-256 hash of the RLP of null (a `Buffer`)
*__var__*: {Buffer} KECCAK256\_RLP

___
<a id="keccak256_rlp_array"></a>

### `<Const>` KECCAK256_RLP_ARRAY

**● KECCAK256_RLP_ARRAY**: *`any`* =  Buffer.from(KECCAK256_RLP_ARRAY_S, 'hex')

*Defined in [index.ts:52](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L52)*

Keccak-256 of an RLP of an empty array (a `Buffer`)
*__var__*: {Buffer} KECCAK256\_RLP\_ARRAY

___
<a id="keccak256_rlp_array_s"></a>

### `<Const>` KECCAK256_RLP_ARRAY_S

**● KECCAK256_RLP_ARRAY_S**: *"1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"* = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"

*Defined in [index.ts:45](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L45)*

Keccak-256 of an RLP of an empty array (a `String`)
*__var__*: {String} KECCAK256\_RLP\_ARRAY\_S

___
<a id="keccak256_rlp_s"></a>

### `<Const>` KECCAK256_RLP_S

**● KECCAK256_RLP_S**: *"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"* = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"

*Defined in [index.ts:58](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L58)*

Keccak-256 hash of the RLP of null (a `String`)
*__var__*: {String} KECCAK256\_RLP\_S

___
<a id="max_integer"></a>

### `<Const>` MAX_INTEGER

**● MAX_INTEGER**: *`BN`* =  new BN(
  'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  16,
)

*Defined in [index.ts:15](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L15)*

the max integer that this VM can handle (a `BN`)
*__var__*: {BN} MAX\_INTEGER

___
<a id="two_pow256"></a>

### `<Const>` TWO_POW256

**● TWO_POW256**: *`BN`* =  new BN(
  '10000000000000000000000000000000000000000000000000000000000000000',
  16,
)

*Defined in [index.ts:24](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L24)*

2^256 (a `BN`)
*__var__*: {BN} TWO\_POW256

___
<a id="assert"></a>

### `<Const>` assert

**● assert**: *`any`* =  require('assert')

*Defined in [index.ts:4](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L4)*

___
<a id="createhash"></a>

### `<Const>` createHash

**● createHash**: *`any`* =  require('create-hash')

*Defined in [index.ts:6](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L6)*

___
<a id="createkeccakhash"></a>

### `<Const>` createKeccakHash

**● createKeccakHash**: *`any`* =  require('keccak')

*Defined in [index.ts:2](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L2)*

___
<a id="ethjsutil"></a>

### `<Const>` ethjsUtil

**● ethjsUtil**: *`any`* =  require('ethjs-util')

*Defined in [index.ts:8](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L8)*

___
<a id="publictoaddress"></a>

### `<Const>` publicToAddress

**● publicToAddress**: *[pubToAddress]()* =  pubToAddress

*Defined in [index.ts:336](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L336)*

___
<a id="rlp"></a>

### `<Const>` rlp

**● rlp**: *`any`* =  require('rlp')

*Defined in [index.ts:5](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L5)*

___
<a id="secp256k1"></a>

### `<Const>` secp256k1

**● secp256k1**: *`any`* =  require('secp256k1')

*Defined in [index.ts:3](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L3)*

___
<a id="setlength"></a>

### `<Const>` setLength

**● setLength**: *[setLengthLeft]()* =  setLengthLeft

*Defined in [index.ts:131](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L131)*

___
<a id="stripzeros"></a>

### `<Const>` stripZeros

**● stripZeros**: *[unpad]()* =  unpad

*Defined in [index.ts:158](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L158)*

___

## Functions

<a id="addhexprefix"></a>

### `<Const>` addHexPrefix

▸ **addHexPrefix**(str: *`string`*): `string`

*Defined in [index.ts:594](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L594)*

Adds "0x" to a given `String` if it does not already start with "0x"

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  \- |

**Returns:** `string`

___
<a id="batojson"></a>

### `<Const>` baToJSON

▸ **baToJSON**(ba: *`any`*): `undefined` | `string` | `any`[]

*Defined in [index.ts:653](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L653)*

Converts a `Buffer` or `Array` to JSON

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ba | `any` |  \- |

**Returns:** `undefined` | `string` | `any`[]

___
<a id="buffertohex"></a>

### `<Const>` bufferToHex

▸ **bufferToHex**(buf: *`Buffer`*): `string`

*Defined in [index.ts:205](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L205)*

Converts a `Buffer` into a hex `String`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  \- |

**Returns:** `string`

___
<a id="buffertoint"></a>

### `<Const>` bufferToInt

▸ **bufferToInt**(buf: *`Buffer`*): `number`

*Defined in [index.ts:196](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L196)*

Converts a `Buffer` to a `Number`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Buffer` |  \- |

**Returns:** `number`

___
<a id="calculatesigrecovery"></a>

###  calculateSigRecovery

▸ **calculateSigRecovery**(v: *`number`*, chainId: *`number`*): `number`

*Defined in [index.ts:777](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L777)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |
| chainId | `number` |

**Returns:** `number`

___
<a id="defineproperties"></a>

### `<Const>` defineProperties

▸ **defineProperties**(self: *`any`*, fields: *`any`*, data: *`any`*): `void`

*Defined in [index.ts:675](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L675)*

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

▸ **ecrecover**(msgHash: *`Buffer`*, v: *`number`*, r: *`Buffer`*, s: *`Buffer`*, chainId: *`number`*): `Buffer`

*Defined in [index.ts:414](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L414)*

ECDSA public key recovery from signature

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| msgHash | `Buffer` |  \- |
| v | `number` |  \- |
| r | `Buffer` |  \- |
| s | `Buffer` |  \- |
| chainId | `number` |

**Returns:** `Buffer`
publicKey

___
<a id="ecsign"></a>

### `<Const>` ecsign

▸ **ecsign**(msgHash: *`Buffer`*, privateKey: *`Buffer`*, chainId: *`number`*): [ECDSASignature](interfaces/ecdsasignature.md)

*Defined in [index.ts:375](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L375)*

ECDSA sign

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| msgHash | `Buffer` |  \- |
| privateKey | `Buffer` |  \- |
| chainId | `number` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

___
<a id="fromrpcsig"></a>

### `<Const>` fromRpcSig

▸ **fromRpcSig**(sig: *`string`*): [ECDSASignature](interfaces/ecdsasignature.md)

*Defined in [index.ts:454](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L454)*

Convert signature format of the `eth_sign` RPC method to signature parameters NOTE: all because of a bug in geth: [https://github.com/ethereum/go-ethereum/issues/2053](https://github.com/ethereum/go-ethereum/issues/2053)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sig | `string` |  \- |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

___
<a id="fromsigned"></a>

### `<Const>` fromSigned

▸ **fromSigned**(num: *`Buffer`*): `BN`

*Defined in [index.ts:215](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L215)*

Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| num | `Buffer` |  \- |

**Returns:** `BN`

___
<a id="generateaddress"></a>

### `<Const>` generateAddress

▸ **generateAddress**(from: *`Buffer`*, nonce: *`Buffer`*): `Buffer`

*Defined in [index.ts:540](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L540)*

Generates an address of a newly created contract

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `Buffer` |  the address which is creating this new address |
| nonce | `Buffer` |  the nonce of the from account |

**Returns:** `Buffer`

___
<a id="generateaddress2"></a>

### `<Const>` generateAddress2

▸ **generateAddress2**(from: *`Buffer` | `String`*, salt: *`Buffer` | `String`*, initCode: *`Buffer` | `String`*): `Buffer`

*Defined in [index.ts:560](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L560)*

Generates an address for a contract created using CREATE2

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `Buffer` | `String` |  the address which is creating this new address |
| salt | `Buffer` | `String` |  a salt |
| initCode | `Buffer` | `String` |  the init code of the contract being created |

**Returns:** `Buffer`

___
<a id="hashpersonalmessage"></a>

### `<Const>` hashPersonalMessage

▸ **hashPersonalMessage**(message: *`any`*): `Buffer`

*Defined in [index.ts:400](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L400)*

Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call. The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign` call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key used to produce the signature.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `any` |  \- |

**Returns:** `Buffer`
hash

___
<a id="importpublic"></a>

### `<Const>` importPublic

▸ **importPublic**(publicKey: *`Buffer`*): `Buffer`

*Defined in [index.ts:354](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L354)*

Converts a public key to the Ethereum format.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| publicKey | `Buffer` |  \- |

**Returns:** `Buffer`

___
<a id="isprecompiled"></a>

### `<Const>` isPrecompiled

▸ **isPrecompiled**(address: *`Buffer` | `string`*): `boolean`

*Defined in [index.ts:584](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L584)*

Returns true if the supplied address belongs to a precompiled account (Byzantium)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `Buffer` | `string` |  \- |

**Returns:** `boolean`

___
<a id="isvalidaddress"></a>

### `<Const>` isValidAddress

▸ **isValidAddress**(address: *`string`*): `boolean`

*Defined in [index.ts:489](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L489)*

Checks if the address is a valid. Accepts checksummed addresses too

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  \- |

**Returns:** `boolean`

___
<a id="isvalidchecksumaddress"></a>

### `<Const>` isValidChecksumAddress

▸ **isValidChecksumAddress**(address: *`string`*): `boolean`

*Defined in [index.ts:530](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L530)*

Checks if the address is a valid checksummed address

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  \- |

**Returns:** `boolean`

___
<a id="isvalidprivate"></a>

### `<Const>` isValidPrivate

▸ **isValidPrivate**(privateKey: *`Buffer`*): `boolean`

*Defined in [index.ts:296](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L296)*

Checks if the private key satisfies the rules of the curve secp256k1.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  \- |

**Returns:** `boolean`

___
<a id="isvalidpublic"></a>

### `<Const>` isValidPublic

▸ **isValidPublic**(publicKey: *`Buffer`*, sanitize?: *`boolean`*): `boolean`

*Defined in [index.ts:307](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L307)*

Checks if the public key satisfies the rules of the curve secp256k1 and the requirements of Ethereum.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| publicKey | `Buffer` | - |  The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false |

**Returns:** `boolean`

___
<a id="isvalidsigrecovery"></a>

###  isValidSigRecovery

▸ **isValidSigRecovery**(recovery: *`number`*): `boolean`

*Defined in [index.ts:781](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L781)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| recovery | `number` |

**Returns:** `boolean`

___
<a id="isvalidsignature"></a>

### `<Const>` isValidSignature

▸ **isValidSignature**(v: *`number`*, r: *`Buffer`*, s: *`Buffer`*, homestead?: *`boolean`*, chainId: *`number`*): `boolean`

*Defined in [index.ts:613](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L613)*

Validate ECDSA signature

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| v | `number` | - |  \- |
| r | `Buffer` | - |  \- |
| s | `Buffer` | - |  \- |
| `Default value` homestead | `boolean` | true |
| chainId | `number` | - |

**Returns:** `boolean`

___
<a id="iszeroaddress"></a>

### `<Const>` isZeroAddress

▸ **isZeroAddress**(address: *`string`*): `boolean`

*Defined in [index.ts:499](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L499)*

Checks if a given address is a zero address

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  \- |

**Returns:** `boolean`

___
<a id="keccak"></a>

### `<Const>` keccak

▸ **keccak**(a: *`any`*, bits?: *`number`*): `Buffer`

*Defined in [index.ts:234](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L234)*

Creates Keccak hash of the input

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | `any` | - |  the input data |
| `Default value` bits | `number` | 256 |

**Returns:** `Buffer`

___
<a id="keccak256"></a>

### `<Const>` keccak256

▸ **keccak256**(a: *`any`*): `Buffer`

*Defined in [index.ts:248](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L248)*

Creates Keccak-256 hash of the input, alias for keccak(a, 256)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `any` |  the input data |

**Returns:** `Buffer`

___
<a id="privatetoaddress"></a>

### `<Const>` privateToAddress

▸ **privateToAddress**(privateKey: *`Buffer`*): `Buffer`

*Defined in [index.ts:480](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L480)*

Returns the ethereum address of a given private key

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** `Buffer`

___
<a id="privatetopublic"></a>

### `<Const>` privateToPublic

▸ **privateToPublic**(privateKey: *`Buffer`*): `Buffer`

*Defined in [index.ts:343](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L343)*

Returns the ethereum public key of a given private key

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** `Buffer`

___
<a id="pubtoaddress"></a>

### `<Const>` pubToAddress

▸ **pubToAddress**(pubKey: *`Buffer`*, sanitize?: *`boolean`*): `Buffer`

*Defined in [index.ts:327](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L327)*

Returns the ethereum address of a given public key. Accepts "Ethereum public keys" and SEC1 encoded keys.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pubKey | `Buffer` | - |  The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false |

**Returns:** `Buffer`

___
<a id="ripemd160"></a>

### `<Const>` ripemd160

▸ **ripemd160**(a: *`any`*, padded: *`boolean`*): `Buffer`

*Defined in [index.ts:270](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L270)*

Creates RIPEMD160 hash of the input

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `any` |  the input data |
| padded | `boolean` |  whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

___
<a id="rlphash"></a>

### `<Const>` rlphash

▸ **rlphash**(a: *`any`*): `Buffer`

*Defined in [index.ts:287](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L287)*

Creates SHA-3 hash of the RLP encoded version of the input

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `any` |  the input data |

**Returns:** `Buffer`

___
<a id="setlengthleft"></a>

### `<Const>` setLengthLeft

▸ **setLengthLeft**(msg: *`any`*, length: *`number`*, right?: *`boolean`*): `any`

*Defined in [index.ts:114](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L114)*

Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes. Or it truncates the beginning if it exceeds.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| msg | `any` | - |  the value to pad |
| length | `number` | - |  the number of bytes the output should be |
| `Default value` right | `boolean` | false |

**Returns:** `any`

___
<a id="setlengthright"></a>

### `<Const>` setLengthRight

▸ **setLengthRight**(msg: *`any`*, length: *`number`*): `any`

*Defined in [index.ts:140](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L140)*

Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes. Or it truncates the beginning if it exceeds.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| msg | `any` |  the value to pad |
| length | `number` |  the number of bytes the output should be |

**Returns:** `any`

___
<a id="sha256"></a>

### `<Const>` sha256

▸ **sha256**(a: *`any`*): `Buffer`

*Defined in [index.ts:257](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L257)*

Creates SHA256 hash of the input

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `any` |  the input data |

**Returns:** `Buffer`

___
<a id="tobuffer"></a>

### `<Const>` toBuffer

▸ **toBuffer**(v: *`any`*): `Buffer`

*Defined in [index.ts:164](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L164)*

Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| v | `any` |  the value |

**Returns:** `Buffer`

___
<a id="tochecksumaddress"></a>

### `<Const>` toChecksumAddress

▸ **toChecksumAddress**(address: *`string`*): `string`

*Defined in [index.ts:509](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L509)*

Returns a checksummed address

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  \- |

**Returns:** `string`

___
<a id="torpcsig"></a>

### `<Const>` toRpcSig

▸ **toRpcSig**(v: *`number`*, r: *`Buffer`*, s: *`Buffer`*, chainId: *`number`*): `string`

*Defined in [index.ts:438](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L438)*

Convert signature parameters into the format of `eth_sign` RPC method

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| v | `number` |  \- |
| r | `Buffer` |  \- |
| s | `Buffer` |  \- |
| chainId | `number` |

**Returns:** `string`
sig

___
<a id="tounsigned"></a>

### `<Const>` toUnsigned

▸ **toUnsigned**(num: *`BN`*): `Buffer`

*Defined in [index.ts:224](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L224)*

Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| num | `BN` |  \- |

**Returns:** `Buffer`

___
<a id="unpad"></a>

### `<Const>` unpad

▸ **unpad**(a: *`any`*): `any`

*Defined in [index.ts:149](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L149)*

Trims leading zeros from a `Buffer` or an `Array`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `any` |  \- |

**Returns:** `any`

___
<a id="zeroaddress"></a>

### `<Const>` zeroAddress

▸ **zeroAddress**(): `string`

*Defined in [index.ts:99](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L99)*

Returns a zero address

**Returns:** `string`

___
<a id="zeros"></a>

### `<Const>` zeros

▸ **zeros**(bytes: *`number`*): `Buffer`

*Defined in [index.ts:90](https://github.com/ethereumjs/ethereumjs-util/blob/6141487/src/index.ts#L90)*

Returns a buffer filled with 0s

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bytes | `number` |  the number of bytes the buffer should be |

**Returns:** `Buffer`

___

