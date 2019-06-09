import { PatreonSupporters } from './PatreonSupporters'
import { Contributors } from './Contributors'

export function Credits () {
  return `\
Many thanks to /u/FamousHippopotamus and /u/OrkishBlade for their excellent tables and DMing advice over the years. Shoutout to /r/twinegames and the good folks in the Discord server who helped a total newb learn how to code in Twine.

[[Sign up to the newsletter to be notified about updates|EmailSignUp]]

${PatreonSupporters()}
${Contributors()}
`
}
