/* eslint-disable no-unused-vars */
import Cesium from 'cesium/Cesium'
import KnockoutMarkdownBinding from './KnockoutMarkdownBinding'
import KnockoutHammerBinding from './KnockoutHammerBinding'
var Knockout = Cesium.knockout
var SvgPathBindingHandler = Cesium.SvgPathBindingHandler
var registerKnockoutBindings = function () {
  SvgPathBindingHandler.register(Knockout)
  KnockoutMarkdownBinding.register(Knockout)
  KnockoutHammerBinding.register(Knockout)

  Knockout.bindingHandlers.embeddedComponent = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      var component = Knockout.unwrap(valueAccessor())
      component.show(element)
      return { controlsDescendantBindings: true }
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    }
  }
}

export default registerKnockoutBindings
