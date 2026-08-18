import { sdk } from '../sdk'
import { manageSmtp } from './manageSmtp'
import { resetOwnerPassword } from './resetOwnerPassword'
import { setPrimaryUrl } from './setPrimaryUrl'

export const actions = sdk.Actions.of()
  .addAction(setPrimaryUrl)
  .addAction(manageSmtp)
  .addAction(resetOwnerPassword)
