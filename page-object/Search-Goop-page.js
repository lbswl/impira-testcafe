/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Goop Search webpage
*/

import { Selector, t } from 'testcafe'

class SearchGoop {
    constructor() {
        //SearchBar    
        this.searchBar = Selector('.SearchBar')
        this.searchDropdown = Selector('.SearchBar-dropdownButton')
        this.saveSearch = Selector('.SearchBar-saveSearchButton')
        this.searchButton =  Selector('.SearchBar-searchButton')
        this.saveSearchInput = Selector('.is-paddedRight')
        this.saveButton = Selector('.is-normal')
        this.cancelButton = Selector('.is-cancel')
        this.itemCount = Selector('.PageBar-info div')
        this.savedSearch = Selector('#search-filter-saved-searches')
        this.lastSavedSearch = Selector('.open li:nth-last-child(1)')
        this.deleteButton = Selector('.DeleteSavedSearchMutationIcon-deleteIcon-svg')
        //Sort
        this.sortIcon = Selector('.SortDropdown-arrowIcon-svg')
        this.sortDropdown = Selector('#SortDropdown')
        //Asset View
        this.assetViewIcon = Selector('a:nth-child(1) > .SideNav-link .SVGInline-svg')
        this.oneSelection = Selector('.AssetCard:nth-of-type(1) .AssetCard-wrapper')
        this.galleryViewIcon = Selector('.GalleryViewer-controls-icon')
        this.galleryViewPrev = Selector('.GalleryViewer-previous')
        this.galleryViewNext = Selector('.GalleryViewer-next')
        //Videos
        this.videoBtn = Selector(`[aria-label='play']`)
        this.sceneCuts = Selector('.TimelineEvent-label')



    }

    async goToSearch(search){
        await t.hover(this.searchBar)
                .click(this.searchBar)
                .typeText(this.searchBar, search, {paste:true})
                .pressKey('enter')

    }

    async goToSort(){
        await t.hover(this.sortIcon)
                .click(this.sortIcon)
    }

    async goToSaveSearch(search2){
        await t.hover(this.searchBar)
                .click(this.searchBar)
                .typeText(this.searchBar, search2, {paste:true})
                .pressKey('enter')
        await t.hover(this.searchDropdown)
                .click(this.searchDropdown)
        await t.click(this.saveSearch)
        await t.typeText(this.saveSearchInput, 'Automated-Search', {paste:true})
                .click(this.saveButton)
    }

    async deleteSavedSearch(){
        await t.hover(this.searchDropdown)
                .click(this.searchDropdown)
        await t.click(this.savedSearch)
        await t.hover(this.lastSavedSearch)
                .click(this.lastSavedSearch)
                .click(this.deleteButton)
    }

    async goToGalleryView(){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.hover(this.galleryViewIcon)
                .click(this.galleryViewIcon)
    }
}

export default SearchGoop