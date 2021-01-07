import React from 'react'

const List = () => {
    return (
        // List of users
        <main class="mt5 mw6 center">
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <img alt="profile picture" src="http://mrmrs.github.io/photos/p/2.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
          </div>
          <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">Young Gatchell </h1>
            <h2 class="f6 fw4 mt0 mb0 black-60">@yg</h2>
          </div>
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button class="f5 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit"> clear </button>
            </form>
          </div>
        </article>
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <img alt="profile picture" src="http://mrmrs.github.io/photos/p/10.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
          </div>
          <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">Ahmad Backer</h1>
            <h2 class="f6 fw4 mt0 mb0 black-60">@ahmadBB</h2>
          </div>
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button class="f5 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">clear</button>
            </form>
          </div>
        </article>
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <img alt="profile picture" src="http://mrmrs.github.io/photos/p/11.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
          </div>
          <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">Carlie Noakes</h1>
            <h2 class="f6 fw4 mt0 mb0 black-60">@carnoakes99</h2>
          </div>
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button class="f5 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">clear</button>
            </form>
          </div>
        </article>
        {/* Clear all button */}
        <article class="flex ph3 fr">
            <a class="mt4 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Clear All</a>
        </article>
      </main> 
    )
}

export default List;