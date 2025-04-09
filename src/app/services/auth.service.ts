import { Injectable } from '@angular/core';
import PocketBase, { RecordModel } from 'pocketbase';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '@interfaces/user-model';
import { environment } from '../../environments/environment.development';
import { SignupModel } from 'src/app/interfaces/signup-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();
  constructor() { }

  public async signIn(emailAddress: string, password: string): Promise<boolean> {
    const pb = new PocketBase(environment.baseUrl);
    const authData = await pb.collection('users').authWithPassword(emailAddress, password);

    this.userSubject.next({ isValid: pb.authStore.isValid, authModel: pb.authStore.model, token: pb.authStore.token });

    return pb.authStore.isValid;
  }

  public async signUp(signupModel: SignupModel): Promise<RecordModel> {
    const pb = new PocketBase(environment.baseUrl);

    return await pb.collection('users').create(signupModel);
  }

  public async signOut() {
    const pb = new PocketBase(environment.baseUrl);
    return pb.authStore.clear();
  }
}
