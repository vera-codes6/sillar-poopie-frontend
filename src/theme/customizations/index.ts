import { inputCustomizations } from './inputs'
import { drawerCustomizations } from './drawer'
import { typographyCustomizations } from './typography'
import { chartsCustomizations } from './charts'

export default {
  ...inputCustomizations,
  ...drawerCustomizations,
  ...typographyCustomizations,
  ...chartsCustomizations
}
