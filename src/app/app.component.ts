import {Component} from '@angular/core';
import { Campaign } from './models/campaign';
import { User } from './models/user';
import { FirestoreService } from './services/firestore/firestore.service';
import { NFTStorageService } from './services/NFTStorage/nftstorage.service';

import { File } from 'nft.storage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authenticated: boolean = false;
  data: string[] | undefined;


  constructor(
    private firestore: FirestoreService,
    private NFTStorage: NFTStorageService
  ) {
    this.firestore.getCampaigns();
    this.firestore.getUsers();
    this.firestore.addCampaign({} as Campaign);
    this.firestore.addUser({} as User);
    this.NFTStorage.storeNFT(
      new File([], '/assets/icon/icon1.png', { type: 'image.jpg' }),
      'icon1.png',
      'A test image from an icon'
    ).then((data) => console.log('NFT.Storage Service', data));
  }
}
