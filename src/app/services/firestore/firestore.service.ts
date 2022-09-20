import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Campaign } from 'src/app/models/campaign';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private campaignsCollections!: AngularFirestoreCollection<Campaign>;
  private usersCollections!: AngularFirestoreCollection<User>;
  private campaigns!: Observable<Campaign[]>;
  private users!: Observable<User[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.campaignsCollections = afs.collection<Campaign>('campaigns');
    this.usersCollections = afs.collection<User>('users');
  }

  getCampaigns(): Observable<Campaign[]>{
    this.campaigns = this.campaignsCollections.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Campaign;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
    this.campaigns.subscribe((data) => console.log('firestore/campaigns',data));
    return this.campaigns;
  }

  getUsers(): Observable<User[]>{
    this.users = this.usersCollections.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
    this.users.subscribe((data) => console.log('firestore/users',data));
    return this.users;
  }

  addCampaign(campaign: Campaign){
    const c: Campaign = {
      description: 'Description from service',
      goal: 1000,
      image: 'https://www.greenqueen.com.hk/wp-content/uploads/2020/12/Veganic-Farming.png',
      likes: [],
      name: 'Campaign from service',
      perks: [],
      video: 'https://joy.videvo.net/videvo_files/video/free/2018-01/large_watermarked/171124_G1_013_preview.mp4',
      uid: ''
    }
    this.campaignsCollections.add(c);
  }

  addUser(user: User){
    const u: User = {
      campaigns: [],
      liked: [],
      name: 'User from service',
      photo: 'https://c8.alamy.com/comp/T9BWC9/default-profile-avatar-illustration-in-blue-and-white-no-person-T9BWC9.jpg',
      uid: '',
      wallet: '0xWalletFromService'
    }
    this.usersCollections.add(u);
  }
}
