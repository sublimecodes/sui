# sui-domain

> Backbone for creating a domain that complains with the guidelines of Schibsted Spain

## Motivation

**sui-domain** provides:
* Avoid repeating boilerplate code by extracting some on this library.
* Enforce all to follow same rules while creating a new domain.
* A HttpFetcher to make http requests
* Set of domain objects to extend
* A utility to create an entry point

## Installation

```sh
$ npm install @s-ui/domain --save
```

## Using EntryPoint

```javascript
import { EntryPoint } from '@s-ui/domain'

// useCases is an object with a key with the name of the use case
// and the value is the factory of the useCase
const useCases = {
  'current_user': UserFactory.currentUserUseCase
  'products_search': SearchFactory.productsSearchUseCase
  'real_estate_detail': DetailFactory.realEstateDetailUseCase
}

// config could be a simple object or a more complicated
// creation like a class Config with methods to get and set
const config = {
  DETAIL_ENDPOINT: 'http://api.url.com/detail'
}

const domain = new EntryPoint({ config, useCases })

```

## Using Fetcher

```javascript
import { FetcherFactory } from '@s-ui/domain'
import UserEntitiesFactory from '../../user/Entities/factory'
import UserValueObjectsFactory from '../../user/ValueObjects/factory'

import HTTPUserRepository from './HTTPUserRepository'

export default class UserRepositoriesFactory {
  static hTTPUserRepository = ({config}) =>
    new HTTPUserRepository({
      config,
      fetcher: FetcherFactory.httpFetcher(),
      userEntityFactory: UserEntitiesFactory.userEntity,
      emptyUserValueObjectFactory: UserValueObjectsFactory.emptyUserValueObject
    })
}

```

## Using a domain object

```javascript
import { UseCase } from '@s-ui/domain'

export default class CurrentUserUseCase extends UseCase {
  constructor ({service} = {}) {
    super()
    this._service = service
  }

  async execute () {
    const userEntity = await this._service.execute()
    return userEntity.toJSON()
  }
}
```

```javascript
import { Service } from '@s-ui/domain'

export default class CurrentUserService extends Service {
  constructor ({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute () {
    const userEntity = this._repository.current()
    return userEntity
  }
}
```