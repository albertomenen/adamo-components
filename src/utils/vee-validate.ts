import { required, confirmed, length, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', required)

extend('email', email)

extend('confirmed', confirmed)

extend('length', length)
