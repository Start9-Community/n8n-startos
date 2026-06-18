import { sdk } from '../sdk'
import { manageSmtp } from './manageSmtp'
import { resetOwnerPassword } from './resetOwnerPassword'

export const actions = sdk.Actions.of()
  .addAction(manageSmtp)
  .addAction(resetOwnerPassword)
