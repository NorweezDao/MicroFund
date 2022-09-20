import { Injectable } from '@angular/core';
import { CeramicClient } from '@ceramicnetwork/http-client';
import { Composite } from '@composedb/devtools';
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519';
import KeyResolver from 'key-did-resolver';
import { ModelManager } from "@glazed/devtools";
import { writeEncodedComposite } from '@composedb/devtools-node'

@Injectable({
  providedIn: 'root'
})
export class ComposeDBService {
  private readonly streamID: string = 'kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e';
  private ceramic!: CeramicClient;
  private composite!: Composite;

  constructor() {
    // this.ceramic = new CeramicClient('https://ceramic-clay.3boxlabs.com');
    this.ceramic = new CeramicClient('http://localhost:7007');
  }

  async test() {
    const ceramic = new CeramicClient('http://localhost:7007')
    const composite = await Composite.fromModels({
      ceramic,
      models: ['kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e'],
    })

    // await writeEncodedComposite(composite, './my-first-composite.json')
  }

  async getDID() {
    const seed = new Uint8Array(32);

    const did = new DID({
      provider: new Ed25519Provider(seed),
      resolver: KeyResolver.getResolver()
    });

    await did.authenticate()
    await this.ceramic.setDID(did)
    return did
  }

  async createSchema() {
    const manager = new ModelManager({
      ceramic: this.ceramic
    });

    const encodedModel = manager.toJSON()
    const clonedManager = ModelManager.fromJSON({
      ceramic: this.ceramic,
      model: encodedModel
    })
    console.log(clonedManager);
    const publishedModel = await manager.deploy();
    console.log(publishedModel);
  }
}
