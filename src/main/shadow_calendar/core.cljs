(ns shadow-calendar.core
  (:require [reagent.core :as reagent :refer [atom]]
            ["./hello" :as hello]
            ["./bar" :refer (myComponent)]
            ["./calendar" :as Calendar]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn calendar []
;;  (.hello/sayHello "Hello")
  [:div
   [:h1 (:text @app-state)]
   ;;[calendar]
   (reagent/create-element myComponent)
   [:h3 "Edit this and watch it change!"]])

(defn start []
  (reagent/render [js/Calendar]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
