port module Ports exposing (..)

-- JS to Elm port
port firstSeed : (Int -> msg) -> Sub msg
port selectMeta : (String -> msg) -> Sub msg

-- Elm to JS port
port githubAuth : (() -> Cmd msg)
