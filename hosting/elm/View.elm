module View exposing (view)

import Browser
import Html exposing (..)
import Messages exposing (Msg)
import Model exposing (Model)
import Routing exposing (Route(..))
import Views.Donate as Donate
import Views.Footer as Footer
import Views.Header as Header
import Views.Index as Index
import Views.NotFound as NotFound
import Views.Packages as Packages
import Views.Settings as Settings
import Views.Users as Users


view : Model -> Browser.Document Msg
view model =
    { title = "poac"
    , body = [ currentPage model ]
    }


currentPage : Model -> Html Msg
currentPage model =
    let
        attachModel =
            attach model
    in
    attachModel <|
        case model.route of
            HomeIndexRoute ->
                Index.view model

            PackagesRoute name ->
                Packages.view model name

            OrgPackagesRoute org name ->
                Packages.view model (org ++ "/" ++ name)

            DonateRoute ->
                Donate.view model

            UsersRoute id ->
                Users.view model id

            SettingsRoute id ->
                Settings.view model id

            SettingRoute ->
                Settings.view model "tokens"

            NotFoundRoute ->
                NotFound.view


attach : Model -> Html Msg -> Html Msg
attach model html =
    main_ []
        [ Header.view model
        , html
        , Footer.view
        ]
