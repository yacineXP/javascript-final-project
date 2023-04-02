import View from "./View";
import icons from "url:../../img/icons.svg";
// import { state } from "../model";

class PaginationView extends View {
    _parentElement = document.querySelector(".pagination");

    addHandlerClick(handler) {
        this._parentElement.addEventListener("click",function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            // Exec The function
            handler(goToPage);
        })
    }
    

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultPerPage);
        const curPage = this._data.page;

        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) {
            return `
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${curPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button> 
            `
        }
        
        // Last Page
        if ((curPage === numPages) && numPages > 1) {
            return ` 
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>`
        }

        // Other Page
        if (curPage < numPages) {
            return `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button> 
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
        `
        }

        // Page 1, and there are No other page
        return 'Only one page'

    }

}


export default new PaginationView();