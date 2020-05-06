/* eslint-disable no-unused-vars */
import Hammer from 'hammerjs'
import { knockout } from 'cesium/Source/Cesium.js'
var Knockout = knockout
var KnockoutHammerBinding = {
  register: function (Knockout) {
    Knockout.bindingHandlers.swipeLeft = {
      init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var f = Knockout.unwrap(valueAccessor())
        new Hammer(element).on('swipeleft', function (e) {
          var viewModel = bindingContext.$data
          f.apply(viewModel, arguments)
        })
      }
    }

    Knockout.bindingHandlers.swipeRight = {
      init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var f = Knockout.unwrap(valueAccessor())
        new Hammer(element).on('swiperight', function (e) {
          var viewModel = bindingContext.$data
          f.apply(viewModel, arguments)
        })
      }
    }
  }

}

export default KnockoutHammerBinding
