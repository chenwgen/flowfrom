package controllers

import javax.inject.Inject

import scala.concurrent.Future
import play.api.mvc.Action
import play.api.libs.concurrent.Execution.Implicits._
import com.mohiva.play.silhouette.api.Authenticator.Implicits._
import com.mohiva.play.silhouette.api.{Environment, LoginInfo, Silhouette}
import com.mohiva.play.silhouette.api.exceptions.ProviderException
import com.mohiva.play.silhouette.api.repositories.AuthInfoRepository
import com.mohiva.play.silhouette.api.services.AvatarService
import com.mohiva.play.silhouette.api.util.{Credentials, PasswordHasher}
import com.mohiva.play.silhouette.impl.authenticators.CookieAuthenticator
import com.mohiva.play.silhouette.impl.exceptions.IdentityNotFoundException
import com.mohiva.play.silhouette.impl.providers._
import models.UserService
import models.User
import forms.SignInForm
import java.util.Date
import javax.security.sasl.AuthenticationException
/**
 * The credentials auth controller.
 *
 * @param env The Silhouette environment.
 */
//class CredentialsAuthController @Inject() (
//  implicit val env: Environment[User, CookieAuthenticator],
//  val userService: UserService,
//  val authInfoRepository: AuthInfoRepository)
//  extends Silhouette[User, CookieAuthenticator] {
//
//  /**
//   * Authenticates a user against the credentials provider.
//   *
//   * @return The result to display.
//   */
//  def authenticate = Action.async { implicit request =>
////    println("进入CredentialsAuthController.authenticate")
//    SignInForm.form.bindFromRequest.fold (
//      form => {Future.successful(BadRequest(views.html.login(form,"请填写帐号或密码!")))},
//      credentials => (env.providers.get(CredentialsProvider.Credentials) match {
//        case Some(p: CredentialsProvider) =>
//          p.authenticate(credentials)
//        case _ => Future.failed(new AuthenticationException(s"Cannot find credentials provider"))
//      }).flatMap { loginInfo =>
//        userService.retrieve(loginInfo).flatMap {
//          case Some(user) => env.authenticatorService.create(user).map {
//            case Some(authenticator) =>
//              env.eventBus.publish(LoginEvent(user, request, request2lang))
//              env.authenticatorService.send(authenticator, Redirect(routes.ApplicationController.index))
//            case None => throw new AuthenticationException("Couldn't create an authenticator")
//          }
//          case None => Future.failed(new AuthenticationException("Couldn't find user"))
//        }
//      }.recoverWith(exceptionHandler)
//    )
//  }
//}
