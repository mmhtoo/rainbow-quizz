import {Module} from '@nestjs/common'
import firebaseAdminFactory from './firebase-admin.factory'

@Module({
  providers: [firebaseAdminFactory],
})
export default class FirebaseModule {}
