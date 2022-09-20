import { Injectable } from '@angular/core';
import { NFTStorage, File } from 'nft.storage';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NFTStorageService {

constructor() { }

async storeNFT(image: File, name: string, description: string) {
  const nftstorage = new NFTStorage({ token: environment.NFT_STORAGE_KEY })
  return nftstorage.store({
    image,
    name,
    description,
  });
}
}
