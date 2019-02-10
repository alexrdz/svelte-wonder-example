import {Store} from 'svelte/store';

export class AppStore extends Store {
  async fetchData() {
    const siteData = await fetch(`./database.js`)
      .then(r => r.json())
      .catch(err => console.log('err', err));
    console.log('siteData', siteData);
      this.set({
        siteData,
        pages: siteData.pages,
        blocks: siteData.blocks,
        config: siteData.config,
      });
  }
}

export const store = new AppStore({
  name: 'Justo',
  siteData: {},
  pages: {},
  blocks: {},
  config: {},
});

store.fetchData();