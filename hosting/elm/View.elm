module View exposing (view)

import Browser
import Html exposing (..)
import Messages exposing (Msg)
import Model exposing (Model)
import Routing exposing (Route(..))
import String.Extra exposing (humanize)
import Views.Pricing as Pricing
import Views.Footer as Footer
import Views.Header as Header
import Views.Index as Index
import Views.NotFound as NotFound
import Views.Packages as Packages
import Views.Settings as Settings
import Views.Users as Users


view : Model -> Browser.Document Msg
view model =
    let
        title_prefix = "poac"
        ( title, html ) = currentPage model
    in
    { title = title_prefix ++ title
    , body = [ Header.view model
             , html
             , Footer.view
             ]
    }


currentPage : Model -> ( String, Html Msg )
currentPage model =
    case model.route of
        HomeIndexRoute ->
            ( "", Index.view model )

        PackagesRoute ->
            ( " - Packages", Packages.view model "" )

        PackageRoute name ->
            ( " - " ++ name, Packages.view model name )

        OrgPackageRoute org name ->
            let
                org_and_name = org ++ "/" ++ name
            in
            ( " - " ++ org_and_name, Packages.view model org_and_name )

        PricingRoute ->
            ( " - Pricing", Pricing.view model )

        UsersRoute id ->
            ( " - " ++ id, Users.view model id )

        SettingsRoute id ->
            ( " - " ++ humanize id , Settings.view model id )

        SettingRoute ->
            ( " - Tokens", Settings.view model "tokens" )

        NotFoundRoute ->
            ( " - Page not found", NotFound.view )
