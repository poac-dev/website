module Page.Packages exposing (..)

import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Html.Styled.Events exposing (..)
import Model exposing (..)
import Messages exposing (..)


view : Model -> Html Msg
view model =
    main_
        [ class "package-list" ]
        [ listView model ]


listView : Model -> Html Msg
listView model =
    div []
        [ div [ class "search-refinement-list" ]
              [ div [ id "cpp-version" ] []
              , div [ id "package-type" ] []
              ]
        , div [ class "search-results" ]
              [ input
                  [ type_ "search"
                  , id "search-input"
                  , placeholder "Search packages"
                  , value model.searchInput
                  , onInput OnSearchInput
                  ]
                  []
              , div [ id "search-top-container" ] []
              , div []
                  [ div [ id "hits" ] []
                  , div [ id "pagination" ] []
                  ]
              , hitTemplate
              ]
        ]


hitTemplate : Html Msg
hitTemplate =
    script_
        [ type_ "text/html"
        , id "hit-template"
        , hidden True
        ]
        [ div [ class "hit" ]
            [ div [ class "container" ]
                [ div [ class "list-item" ]
                    [ a
                        [ class "hit-name"
                        , href "{{{package.repository}}}"
                        , target "_blank"
                        , rel "noopener noreferrer"
                        ]
                        [ text "{{{package.name}}}" ]
                    , span [ class "hit-version" ]
                        [ text "{{{package.version}}}" ]
                    --, span [ class "hit-package_type" ]
                    --    [ text "{{{package_type}}}" ]
                    , p [ class "hit-description" ]
                        [ text "{{{package.description}}}" ]
                    ]
                ]
            ]
        ]


script_ : List (Attribute msg) -> List (Html msg) -> Html msg
script_ =
    Html.Styled.node "script"