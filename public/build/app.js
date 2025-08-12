(self["webpackChunkgourmet_manager"] = self["webpackChunkgourmet_manager"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // Gestion de l'ajout dynamique d'ingrédients
  const addIngredientBtn = document.getElementById('add-ingredient');
  if (addIngredientBtn) {
    addIngredientBtn.addEventListener('click', function (e) {
      e.preventDefault();

      // Créer un nouveau champ d'ingrédient
      const ingredientsContainer = document.querySelector('#recipe_ingredients');
      const newIngredientInput = document.createElement('input');
      newIngredientInput.type = 'text';
      newIngredientInput.name = 'new_ingredient[]';
      newIngredientInput.className = 'form-control mt-2';
      newIngredientInput.placeholder = 'Nouvel ingrédient';
      ingredientsContainer.parentNode.insertBefore(newIngredientInput, addIngredientBtn);
    });
  }

  // Gestion responsive
  function handleResponsive() {
    const categoriesSection = document.querySelector('.col-md-3');
    const recipesSection = document.querySelector('.col-md-9');
    if (window.innerWidth < 768) {
      categoriesSection.classList.add('mb-4');
      recipesSection.classList.remove('col-md-9');
      recipesSection.classList.add('col-12');
    } else {
      categoriesSection.classList.remove('mb-4');
      recipesSection.classList.add('col-md-9');
      recipesSection.classList.remove('col-12');
    }
  }
  window.addEventListener('resize', handleResponsive);
  handleResponsive();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRDtFQUNBLE1BQU1DLGdCQUFnQixHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNsRSxJQUFJRCxnQkFBZ0IsRUFBRTtJQUNsQkEsZ0JBQWdCLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTRyxDQUFDLEVBQUU7TUFDbkRBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O01BRWxCO01BQ0EsTUFBTUMsb0JBQW9CLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHFCQUFxQixDQUFDO01BQzFFLE1BQU1DLGtCQUFrQixHQUFHUixRQUFRLENBQUNTLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDMURELGtCQUFrQixDQUFDRSxJQUFJLEdBQUcsTUFBTTtNQUNoQ0Ysa0JBQWtCLENBQUNHLElBQUksR0FBRyxrQkFBa0I7TUFDNUNILGtCQUFrQixDQUFDSSxTQUFTLEdBQUcsbUJBQW1CO01BQ2xESixrQkFBa0IsQ0FBQ0ssV0FBVyxHQUFHLG1CQUFtQjtNQUVwRFAsb0JBQW9CLENBQUNRLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDUCxrQkFBa0IsRUFBRU4sZ0JBQWdCLENBQUM7SUFDdEYsQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQSxTQUFTYyxnQkFBZ0JBLENBQUEsRUFBRztJQUN4QixNQUFNQyxpQkFBaUIsR0FBR2pCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxNQUFNVyxjQUFjLEdBQUdsQixRQUFRLENBQUNPLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFFMUQsSUFBSVksTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRyxFQUFFO01BQ3pCSCxpQkFBaUIsQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ3ZDSixjQUFjLENBQUNHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsQ0FBQztNQUMzQ0wsY0FBYyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQyxNQUFNO01BQ0hMLGlCQUFpQixDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDMUNMLGNBQWMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQ3hDSixjQUFjLENBQUNHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM3QztFQUNKO0VBRUFKLE1BQU0sQ0FBQ2xCLGdCQUFnQixDQUFDLFFBQVEsRUFBRWUsZ0JBQWdCLENBQUM7RUFDbkRBLGdCQUFnQixDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ291cm1ldC1tYW5hZ2VyLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gR2VzdGlvbiBkZSBsJ2Fqb3V0IGR5bmFtaXF1ZSBkJ2luZ3LDqWRpZW50c1xuICAgIGNvbnN0IGFkZEluZ3JlZGllbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWluZ3JlZGllbnQnKTtcbiAgICBpZiAoYWRkSW5ncmVkaWVudEJ0bikge1xuICAgICAgICBhZGRJbmdyZWRpZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBDcsOpZXIgdW4gbm91dmVhdSBjaGFtcCBkJ2luZ3LDqWRpZW50XG4gICAgICAgICAgICBjb25zdCBpbmdyZWRpZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWNpcGVfaW5ncmVkaWVudHMnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZ3JlZGllbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBuZXdJbmdyZWRpZW50SW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIG5ld0luZ3JlZGllbnRJbnB1dC5uYW1lID0gJ25ld19pbmdyZWRpZW50W10nO1xuICAgICAgICAgICAgbmV3SW5ncmVkaWVudElucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgbXQtMic7XG4gICAgICAgICAgICBuZXdJbmdyZWRpZW50SW5wdXQucGxhY2Vob2xkZXIgPSAnTm91dmVsIGluZ3LDqWRpZW50JztcblxuICAgICAgICAgICAgaW5ncmVkaWVudHNDb250YWluZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3SW5ncmVkaWVudElucHV0LCBhZGRJbmdyZWRpZW50QnRuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gR2VzdGlvbiByZXNwb25zaXZlXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2l2ZSgpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sLW1kLTMnKTtcbiAgICAgICAgY29uc3QgcmVjaXBlc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sLW1kLTknKTtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21iLTQnKTtcbiAgICAgICAgICAgIHJlY2lwZXNTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbC1tZC05Jyk7XG4gICAgICAgICAgICByZWNpcGVzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXNTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTQnKTtcbiAgICAgICAgICAgIHJlY2lwZXNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC05Jyk7XG4gICAgICAgICAgICByZWNpcGVzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb2wtMTInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNwb25zaXZlKTtcbiAgICBoYW5kbGVSZXNwb25zaXZlKCk7XG59KTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSW5ncmVkaWVudEJ0biIsImdldEVsZW1lbnRCeUlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5ncmVkaWVudHNDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibmV3SW5ncmVkaWVudElucHV0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJuYW1lIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaGFuZGxlUmVzcG9uc2l2ZSIsImNhdGVnb3JpZXNTZWN0aW9uIiwicmVjaXBlc1NlY3Rpb24iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==