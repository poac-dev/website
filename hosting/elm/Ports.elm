port module Ports exposing (createToken, deletePackage, deleteToken, fetchDetailedPackage, fetchOwnedPackages, fetchPackages, fetchSigninUserId, fetchToken, fetchUser, instantsearch, onwidth, receiveDetailedPackage, receivePackages, receiveSigninId, receiveSigninUser, receiveToken, receiveUser, signin, signout, suggest)

import Model exposing (..)
--import Scroll exposing (Move)



-- JS to Elm port
--port scroll : (Move -> msg) -> Sub msg
port onwidth : (Int -> msg) -> Sub msg

port receiveSigninUser : (Maybe SigninUser -> msg) -> Sub msg
port receiveSigninId : (Maybe String -> msg) -> Sub msg
port receiveUser : (Maybe User -> msg) -> Sub msg
port receiveToken : (List Token -> msg) -> Sub msg
port receivePackages : (List Package -> msg) -> Sub msg
port receiveDetailedPackage : (Maybe DetailedPackage -> msg) -> Sub msg



-- Elm to JS port
port signin : () -> Cmd msg
port signout : () -> Cmd msg
port fetchUser : String -> Cmd msg

port fetchToken : () -> Cmd msg
port createToken : String -> Cmd msg
port deleteToken : String -> Cmd msg

port fetchSigninUserId : () -> Cmd msg
port fetchPackages : () -> Cmd msg
port fetchOwnedPackages : String -> Cmd msg
port fetchDetailedPackage : String -> Cmd msg
port deletePackage : ( String, String ) -> Cmd msg

port suggest : () -> Cmd msg
port instantsearch : () -> Cmd msg
