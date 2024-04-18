import User from '#models/user'
import { loginUserValidator } from '#validators/login_validator'
import { registerUserValidator } from '#validators/register_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerUserValidator)
    const user = await User.create(payload)
    return response.status(201).json(user)
  }

  public async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)
    return response.ok({
      token: token,
      ...user.serialize(),
    })
  }
}
