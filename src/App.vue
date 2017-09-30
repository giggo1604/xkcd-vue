<template>
  <div id="app" class="xkcd-wrapper">
    <header>
      <nav class="box">
        <ul>
          <li><router-link :to="'archive'">Archive</router-link></li>
          <li><a href="http://what-if.xkcd.com">What If?</a></li>
          <li><a href="http://blag.xkcd.com">Blag</a></li>
          <li><a href="http://store.xkcd.com/">Store</a></li>
          <li><a rel="author" href="/about">About</a></li>
        </ul>
      </nav>
      <div class="main box">
        <div class="header">
          <router-link :to="{ name: 'latest' }">
            <img src="https://xkcd.com/s/0b7742.png">
          </router-link>
          <div class="slogan">
            A webcomic of romance,<br/>
            sarcasm, math, and language.
          </div>
        </div>
        <div class="news">
          <strong>I'll be visiting the UK next week!</strong> You can join me in <strong>London</strong> from September 30-October 2 (at <a href="https://live.newscientist.com/speakers/randall-munroe">New Scientist Live</a>, <a href="http://www.rigb.org/whats-on/events-2017/october/public-lunchtime-talk--randall-munroe">The Royal Institution</a>, and <a href="http://www.intelligencesquared.com/events/randall-munroe-on-making-complicated-stuff-simple/">Intelligence Squared</a>), then from October 3-6 in <a href="https://www.stpetersyork.org.uk/public_lectures/randall_munroe_thing_explainer">York</a>, <a href="https://www.eventbrite.co.uk/e/thing-explaining-with-randall-munroe-tickets-37832289396">Edinburgh</a>, <a href="https://www.toppingbooks.co.uk/events/ely/randall-murray-thing-explainer/">Cambridge and Ely</a>, <a href="https://www.eventbrite.co.uk/e/randall-munroe-book-signing-thing-explainer-tickets-38041072873">Oxford</a>, and <a href="http://www.cheltenhamfestivals.com/literature/whats-on/2017/randall-munroe/">Cheltenham</a>.
        </div>
      </div> 
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  font-size: 16px;
  font-family: Lucida,Helvetica,sans-serif;
  font-variant: small-caps;
  background-color: #96A8C8;
}

.xkcd-wrapper {
  width: 780px;
  margin: auto;
  header {
    display: flex;
    nav {
      flex-grow: 1;
      ul {
        list-style: none;
        margin: 0;
        li > a {
          color: #282B30;
          font-size: 21px;
          font-weight: 800;
        }
      }
    }
    .main {
      flex-basis: 545px;
      margin-left: 2px;
      .header {
        display: flex;
        .slogan {
          padding: 20px;
          font-size: 20px;
          font-style: italic;
          font-weight: 800;
          line-height: 120%;
          vertical-align: top;
        }
      }
      .news {
        width: 90%;
        line-height: 150%;
      }
    }
  }
  a {
    text-decoration: none;
    color: #96a8c8;
    font-weight: 800;
    &:hover {
      text-decoration: underline;
    }
  }
  .box {
    background: #ffffff;
    border: solid 1.5px #071419;
    border-radius: 12px;
    padding: 15px;
  }
}
</style>

