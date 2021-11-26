<template>
  <div class="main">
    <div class="article">
      <div class="header">
        <img src="https://repository-images.githubusercontent.com/30675533/1d132880-7b5a-11eb-934c-c16d37113e78" alt="" width="225px" />
        <div class="headerItem">
          <span class="headerItemElement">
            Browse fonts  
          </span>
          <span class="headerItemElement">
            Icons
          </span>
          <span class="headerItemElement">
            More
          </span>
          <span class="material-icons headerItemElement">
            brightness_4
          </span>
          <span class="material-icons headerItemElement">
            app_registration
          </span>
        </div>
      </div>
      <div class="body">
        <div class="input-group mb-3 search">
          <span class="input-group-text material-icons" id="basic-addon1">
            search
          </span>
          <input placeholder="Искать исконки" v-model="keywords" type="text" class="form-control" />
          <span class="input-group-text" id="basic-addon1">
            Category
          </span>
          <span class="input-group-text material-icons" id="basic-addon1">
            arrow_drop_down
          </span>
        </div>
        <div class="iconTypes">
          <div :class="{iconType: true, unselectedIconType: !iconTypes.includes('outlined')}" @click="addIconsType('outlined')">
            <span class="material-icons iconTypeItem">
              {{
                iconTypes.includes('outlined') ?
                  'check'
                :
                  ''
              }}
            </span>
            <span class="iconTypeItem">
              Outlined
            </span>
          </div>
          <div :class="{iconType: true, unselectedIconType: !iconTypes.includes('filled')}" @click="addIconsType('filled')">
            <span class="material-icons iconTypeItem">
              {{
                iconTypes.includes('filled') ?
                  'check'
                :
                  ''
              }}
            </span>
            <span class="iconTypeItem">
              Filled
            </span>
          </div>
          <div :class="{iconType: true, unselectedIconType: !iconTypes.includes('rounded')}" @click="addIconsType('rounded')">
            <span class="material-icons iconTypeItem">
              {{
                iconTypes.includes('rounded') ?
                  'check'
                :
                  ''
              }}
            </span>
            <span class="iconTypeItem">
              Rounded
            </span>
          </div>
          <div :class="{iconType: true, unselectedIconType: !iconTypes.includes('sharp')}" @click="addIconsType('sharp')">
            <span class="material-icons iconTypeItem">
              {{
                iconTypes.includes('sharp') ?
                  'check'
                :
                  ''
              }}
            </span>
            <span class="iconTypeItem">
              Sharp
            </span>
          </div>
          <div :class="{iconType: true, unselectedIconType: !iconTypes.includes('two_tone')}" @click="addIconsType('two_tone')">
            <span class="material-icons iconTypeItem">
              {{
                iconTypes.includes('two_tone') ?
                  'check'
                :
                  ''
              }}
            </span>
            <span class="iconTypeItem">
              Two tone
            </span>
          </div>
        </div>
        <div class="sorter">
          <div class="input-group mb-3">
            <button class="btn btn-light">
              Sort by: {{ sortType }}
            </button>
            <span class="input-group-text material-icons" id="basic-addon1">
              arrow_drop_down
            </span>
          </div>
        </div>
        <!-- <div class="iconsList">
          <div class="icon" @click="isAside = true">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
        </div>
        <div class="iconsList">
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
        </div>
        <div class="iconsList">
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
        </div>
        <div class="iconsList">
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
        </div>
        <div class="iconsList">
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
          <div class="icon">
            <span class="material-icons iconSource">
              favorite_border
            </span>
            <span>
              Favorite border
            </span>
          </div>
        </div> -->
        
        <div class="" v-if="icons.filter(icon => icon.name.includes(keywords) && (icon.types.some(type => iconTypes.includes(type) && iconTypes.length) || !iconTypes.length)).length >= 1">
          <div :class="{icon: true, activeGlyphIcon: activeGlyphicon.name === icon.name }" v-for="icon in icons.filter(icon => icon.name.includes(keywords) && (icon.types.some(type => iconTypes.includes(type) && iconTypes.length) || !iconTypes.length))" :key="icon.name" @click="isAside = true; activeGlyphicon = icon">
        <!-- <div class="iconsList" v-if="icons.filter(icon => icon.name.includes(keywords) && icon.types.some(type => iconTypes.includes(type))).length >= 1">
          <div :class="{icon: true, activeGlyphIcon: activeGlyphicon.name === icon.name }" v-for="icon in icons.filter(icon => icon.name.includes(keywords) && icon.types.some(type => iconTypes.includes(type)))" :key="icon.name" @click="isAside = true; activeGlyphicon = icon"> -->
            
            <!-- <span class="material-icons iconSource">
              favorite_border
            </span> -->
            <img class="iconSource" :src="`http://localhost:4000/api/glyphicons/get/?glyphiconname=${icon.name}`" :alt="icon.name" width="45px" height="45px" />
            <span>
              {{
                icon.name
              }}
            </span>
          </div>
        </div>
        <div v-else class="notFoundGlyphs">
          <span class="notFoundGlyphsHeader notFoundGlyphsItem">
            {{
              notFoundGlyphsHeaders[randomNotFoundGlyphsHeader]
            }}
          </span>
          <span class="notFoundGlyphsItem">
            No icons found for ‘asd’
          </span>
          <button class="btn btn-primary w-25 notFoundGlyphsItem">
            Clear your filters and try again
          </button>
        </div>

      </div>
      <div class="footer">
        <img class="asideHeaderItemElement" src="../assets/logo.png" alt="Circle" width="25px" />
        <div class="footerItem">
          <span class="footerItemElement">
            Privacy
          </span>
          <span class="footerItemElement">
            Terms of service
          </span>
        </div>
      </div>
    </div>
    <div v-if="isAside" class="aside">
      <div class="asideHeader">
        <div class="asideHeaderItem">
          <img class="asideHeaderItemElement" :src="`http://localhost:4000/api/glyphicons/get/?glyphiconname=${activeGlyphicon.name}`" :alt="activeGlyphicon.name" width="25px" />
          <span class="asideHeaderItemElement">
            {{
              activeGlyphicon.name
            }}
          </span>
        </div>
        <div class="asideHeaderItem">
          <span class="material-icons asideBtn">
            share
          </span>
          <span class="material-icons asideBtn" @click="isAside = false">
            close
          </span>
        </div>
      </div>
      <div class="asideBody">
        <div class="platforms">
          <div :class="{platform: true, startPlatform: true, activePlatform: platform === 'web'}" @click="platform = 'web'">
            <span>
              Web
            </span>
          </div>
          <div :class="{platform: true, activePlatform: platform === 'android'}" @click="platform = 'android'">
            <span>
              Android
            </span>
          </div>
          <div :class="{platform: true, activePlatform: platform === 'ios'}" @click="platform = 'ios'">
            <span>
              IOS
            </span>
          </div>
          <div :class="{platform: true, endPlatform: true, activePlatform: platform === 'flutter'}" @click="platform = 'flutter'">
            <span>
              Flutter
            </span>
          </div>
        </div>
        <div class="densityAndSize">
          <div class="density">
            <span>
              Density
            </span>
            <button class="btn btn-light">
              1x
            </button>
            <div class="color">
              <span>
                Color
              </span>
              <button class="btn btn-light">
                Black
              </button>
            </div>
          </div>
          <div class="size">
            <span>
              Size
            </span>
            <button class="btn btn-light">
              24dp
            </button>
          </div>
        </div>
        <div class="exampleCodeLabel">
          <span class="exampleCodeLabelHeader">
            Icon font
          </span>
          <span>
            Follow the instructions to embed the icon font in your site and learn how to style your icons using CSS.
          </span>
        </div>
        <div class="codeExample">
          <!-- <span ref="codeExampleOne" v-text="`<span class=\'\'material-icons\'\'>\n${activeGlyphicon.name}</span>`">
            
          </span> -->
          <textarea class="inputAsText" ref="codeExampleOne" :value="`<span class=\'\'material-icons\'\'>${activeGlyphicon.name}</span>`">
          </textarea>
          <span @click="copyCodeExample($refs.codeExampleOne)" class="material-icons codeExampleCopyBtn">
            content_copy
          </span>
        </div>
        <div class="codeExample">
          <!-- <span v-text="`${activeGlyphicon.name}`">
            
          </span> -->
          <textarea class="inputAsText" ref="codeExampleTwo" :value="`${activeGlyphicon.name}`">
          </textarea>
          <span @click="copyCodeExample($refs.codeExampleTwo)" class="material-icons codeExampleCopyBtn">
            content_copy
          </span>
        </div>
        <span class="exampleCodeLabelHeader">
          Code point
        </span>
        <div class="codeExample">
          <span v-text="`e14d`">
            
          </span>
          <span class="material-icons codeExampleCopyBtn">
            content_copy
          </span>
        </div>
        <div class="angularIcons">
          <span class="exampleCodeLabelHeader">
            Use in Angular
          </span>
          <span>
            Learn how to use icons in the Angular guide.
          </span>
        </div>
      </div>
      <div class="asideFooter">
        <div class="input-group mb-3 downloadBtn w-100" @click="downloadIcon('svg')">
          <span class="input-group-text material-icons w-25" id="basic-addon1">
            download
          </span>
          <button class="btn btn-primary w-50">
            SVG
          </button>
        </div>
        <div class="input-group mb-3 downloadBtn" @click="downloadIcon('png')">
          <span class="input-group-text material-icons w-25" id="basic-addon1">
            download
          </span>
          <button class="btn btn-primary w-50">
            PNG
          </button>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      isAside: false,
      sortType: 'Most popular',
      iconTypes: [
        'filled'
      ],
      platform: 'web',
      icons: [],
      notFoundGlyphsHeaders: [
        '(;-;)',
        '\(o_o)/',
        '(^-^*)',
        '\(^Д^)/',
        '(·_·)',
        '(o^^)o',
        '(>_<)',
        '(˚Δ˚)b',
        '(=\'X\'=)',
        '(≥o≤)',
        '(^_^)b'
      ],
      randomNotFoundGlyphsHeader: 0,
      keywords: '',
      activeGlyphicon: {
        name: 'Circle'
      }
    }
  },
  mounted() {
    fetch(`http://localhost:4000/api/glyphicons/all/`, {
      mode: 'cors',
      method: 'GET'
    }).then(response => response.body).then(rb  => {
        const reader = rb.getReader()
        return new ReadableStream({
        start(controller) {
            function push() {
            reader.read().then( ({done, value}) => {
                if (done) {
                    console.log('done', done);
                    controller.close();
                    return;
                }
                controller.enqueue(value);
                console.log(done, value);
                push();
            })
            }
            push();
        }
        });
    }).then(stream => {
      return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
    })
    .then(result => {
      if (JSON.parse(result).status === 'OK') {
        this.icons = JSON.parse(result).glyphicons
        this.randomNotFoundGlyphsHeader = Math.floor(Math.random() * this.notFoundGlyphsHeaders.length)
      }
    })
  },
  methods: {
    copyCodeExample(code) {
      code.select()
      document.execCommand('copy')
    },
    addIconsType(type) {
      if (!this.iconTypes.includes(type)) {
        this.iconTypes.push(type)
      } else if (this.iconTypes.includes(type)) {
        this.iconTypes = this.iconTypes.filter(iconType => {
          return iconType !== type
        })
      }
    },
    downloadIcon(format) {
      console.log(`Скачиваю картинку в формате: ${format}`)
    }
  },
  components: {
    
  }
}
</script>
<style scoped>
  
  .main {
    display: flex;

  }

  .aside {
    position: fixed;
    top: 0px;
    left: calc(100% - 25%);
    box-shadow: 0px 0px 5px rgb(150, 150, 150);
    width: 25%;
    height: 100%;
    z-index: 5;
    background-color: rgb(255, 255, 255);
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  .asideHeader {
    align-items: center;
    height: 75px;
    justify-content: space-between;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid rgb(215, 215, 215);
  }

  .asideHeaderItem {
    border-bottom: none;
    display: flex;
    align-items: center;
  }

  .asideHeaderItemElement {
    margin: 0px 5px;
  }

  .footer {
    border-top: 1px solid rgb(215, 215, 215);
    box-sizing: border-box;
    padding: 15px;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .article {
    width: 100%;
    height: 1000px;
  }

  .footerItem {

  }

  .footerItemElement {
    margin: 0px 15px;
  }

  .header {
    margin: 34px 0px;
    height: 50px;
    box-sizing: border-box;
    padding: 0px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerItem {
    display: flex;
  }

  .headerItemElement {
    margin: 0px 15px;
  }

  .search {
    border-radius: 100%;
    width: 75%;
    height: 35px;
    margin: auto;
  }

  .iconTypes {
    display: flex;
  }

  .iconType {
    cursor: default;
    box-sizing: border-box;
    padding: 3px;
    align-items: center;
    display: flex;
    border-radius: 15px;
    width: 130px;
    justify-content: center;
    background-color: rgb(200, 230, 250);
    margin: 0px 5px;
  }

  .iconTypeItem {
    font-weight: 500;
    color: rgb(50, 150, 200);
    margin: 0px 5px;
  }

  .icon {
    box-sizing: border-box;
    float: left;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    padding: 30px 15px;
    width: 125px;
  }

  .iconsList {
    align-items: center;
    display: flex;
    height: 75px;
    margin: 65px 0px;
    /* padding: 75px 35px;  */
  }

  .iconSource {
    font-size: 36px;
    margin: 10px 0px;
    border-radius: 8px;
  }

  .sorter {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 15px 0px;
    height: 35px;
  }

  .asideBtn {
    cursor: pointer;
  }

  .unselectedIconType {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(150, 150, 150);
  }

  .unselectedIconType:hover {
    box-shadow: inset 0px 0px 25px rgb(230, 230, 230);
  }

  .iconType:hover {
    box-shadow: inset 0px 0px 25px rgb(230, 230, 230), 1px 1px 5px rgb(150, 150, 150);
  }

  .asideFooter {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .downloadBtn {
    width: 100%;
    display: flex;
  }

  .asideBody {
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 15px;
  }

  .platforms {
    display: flex;
    justify-content: center;
    margin: 15px 0px;
  }

  .platform {
    border: 1px solid rgb(150, 150, 150);
    box-sizing: border-box;
    padding: 5px;
    font-weight: bolder;
    width: 75px;
    text-align: center;
    cursor: pointer;
  }

  .platform:hover {
    background-color: rgb(235, 235, 235);
  }

  .startPlatform {
    border-radius: 5px 0px 0px 5px;
  }

  .endPlatform {
    border-radius: 0px 5px 5px 0px;
  }

  .activePlatform {
    border: 1px solid rgb(0, 100, 255);
    color: rgb(0, 100, 255);
    background-color: rgb(200, 250, 250);
  }

  .densityAndSize {
    display: flex;
    justify-content: center;
  }

  .density {
    display: flex;
    flex-direction: column;
    margin: 0px 15px;
  }

  .size {
    display: flex;
    flex-direction: column;
    margin: 0px 15px;
  }

  .color {
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
  }

  .exampleCodeLabel {
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
  }
  
  .exampleCodeLabelHeader {
    font-weight: bolder;
  }

  .angularIcons {
    display: flex;
    flex-direction: column;
  }

  .codeExample {
    border-radius: 15px;
    margin: 5px;
    background-color: rgb(235, 235, 235);    
    box-sizing: border-box;
    padding: 30px;
  }

  .codeExampleCopyBtn {
    cursor: pointer;
    /* font-size: 8px; */
    float: right;
    width: 35px;
    height: 15px;
  }

  .notFoundGlyphs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .notFoundGlyphsHeader {
    font-size: 172px;
    color: rgb(200, 200, 200);
  }

  .notFoundGlyphsItem {
    margin: 10px 0px;
  }

  .inputAsText {
    background-color: transparent;
    border: none;
    width: 100%;
  }

  .activeGlyphIcon {
    outline: 1px solid rgb(0, 100, 255);
    border-radius: 8px;
    background-color: rgb(200, 255, 255);
  }

</style>
