<template>
  <section class="section-wrapper" :class="{'mobile': isMobile}">
    <div id="blog" class="anchor"></div>

    <div class="content">
      <h1 class="w-full mb-12 text-center">{{ $t('RECENT BLOG POSTS') }}</h1>
      <div class="recent-post" v-for="(blog, index) in firstTwoPosts" :key="index"
           :class="{'second': index === 1}">
        <div class="image-container">
          <img :src="blog.imageUrl" :alt="$t('Blog Preview Image')"
               @click="openPost(blog.url)">
        </div>
        <h3 class="title" @click="openPost(blog.url)">{{ blog.title }}</h3>
        <p class="author-date"><span class="date">{{ blog.publishedAt }}</span> | <span class="author">{{ blog.author }}</span></p>
        <p class="preview-text">{{ blog.previewText }}</p>
      </div>
      <div class="past-posts">
        <div class="header">
          <img src="../../assets/marketing-elements/PastPostsArrow.svg"
               class="loop-arrow" :alt="$t('Loop Arrow')">
          <h2>{{ $t('PAST POSTS') }}</h2>
        </div>
        <div v-for="(blog, index) in pastPosts" :key="index" class="text-fblue">
          <h3 class="title" @click="openPost(blog.url)">{{ blog.title }}</h3>
          <p>Written by {{ blog.author }}</p>
        </div>
        <div v-if="!pastPosts.length" class="text-fblue">
          <h3 class="title">{{ $t('NO PAST POST YET') }}</h3>
          <p>Written by (soon!)</p>
        </div>
        <div v-if="!pastPosts.length" class="text-fblue">
          <h3 class="title">{{ $t('NO PAST POST YET') }}</h3>
          <p>Written by (soon!)</p>
        </div>
      </div>
      <div class="blog-with-us">
        <div class="header">
          <img src="../../assets/marketing-elements/StraightYellowArrow.svg"
               class="arrow left" alt="$t('Arrow Left')">
          <h2 class="title">{{ $t('WANT TO BLOG WITH US?') }}</h2>
          <img src="../../assets/marketing-elements/StraightYellowArrow.svg"
               class="arrow right" :alt="$t('Arrow Right')">
        </div>
        <div class="click-here" @click="goToContact">
          <span>{{ $t("LET US KNOW, WE'LL FEATURE IT!") }}</span>
        </div>
        <img src="../../assets/illustrations/Coconut-Drinks.svg"
             class="coconut-drinks" :alt="$t('Coconut Drinks')">
      </div>
    </div>

    <div class="orange-lines">
      <div class="line-one"></div>
      <div class="line-two"></div>
      <div class="line-three"></div>
    </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "Blog",

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  data() {
    return {
      posts: [
        {
          title: "My Algorand Experience",
          url: "https://medium.com/@alisa.algo/my-algorand-experience-176285db6a41",
          imageUrl: "https://fungible-files.s3.amazonaws.com/web-resources/blogs/AlisaYar.jpg",
          publishedAt: "Nov 16, 2022",
          author: "Alisa Yar",
          previewText: "So, before I tell you about Algorand, I wanted to explain how I got here in the first place (tldr: accidentally). The first time i’ve heard about crypto was in November 2021. It was when everyone was bullish (hyped, excited) about NFTs and it was really hard not to hear or read about these JPEG drawings...",
        },
        {
          title: "What's The Deal With Fungibl?",
          url: "https://nobody-algo.medium.com/whats-the-deal-with-fungibl-56f370d0e990",
          imageUrl: "https://miro.medium.com/max/720/1*hJ01D3_ool_FDQZ6zLE3gQ.png",
          publishedAt: "Sep 21, 2022",
          author: "nobody.algo",
          previewText: "Fungibl is first and foremost my personal love letter to the Algorand community. I want to deliver something cool to all of my friends, with a heavy coat of polish, that elevates what it means to be here. I want it to serve everyone’s interests. I want it to exemplify the $ALGO NFT spirit...",
        },
        // {
        //   title: "What's The Deal With Fungibl?",
        //   url: "https://nobody-algo.medium.com/whats-the-deal-with-fungibl-56f370d0e990",
        //   imageUrl: "https://miro.medium.com/max/720/1*hJ01D3_ool_FDQZ6zLE3gQ.png",
        //   publishedAt: "Sep 21, 2022",
        //   author: "nobody.algo",
        //   previewText: "Fungibl is first and foremost my personal love letter to the Algorand community. I want to deliver something cool to all of my friends, with a heavy coat of polish, that elevates what it means to be here. I want it to serve everyone’s interests. I want it to exemplify the $ALGO NFT spirit.",
        // },
        // {
        //   title: "What's The Deal With Fungibl?",
        //   url: "https://nobody-algo.medium.com/whats-the-deal-with-fungibl-56f370d0e990",
        //   imageUrl: "https://miro.medium.com/max/720/1*hJ01D3_ool_FDQZ6zLE3gQ.png",
        //   publishedAt: "Sep 21, 2022",
        //   author: "nobody.algo",
        //   previewText: "Fungibl is first and foremost my personal love letter to the Algorand community. I want to deliver something cool to all of my friends, with a heavy coat of polish, that elevates what it means to be here. I want it to serve everyone’s interests. I want it to exemplify the $ALGO NFT spirit.",
        // },
      ],
      pastPostsPage: 1,
    }
  },

  computed: {
    firstTwoPosts() {
      return [ this.posts[0], this.posts[1]]
    },
    pastPosts() {
      const current = this.pastPostsPage * 2
      return this.posts.slice(current, current + 2)
    }
  },

  methods: {
    openPost(url) {
      window.open(url, '_blank')
    },
    goToContact() {
      document.querySelector('#contact').scrollIntoView({ behavior: "smooth" })
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw mt-24 md:mt-42 mx-auto xl:px-12;
  max-width: 1920px;

  .content {
    @apply flex flex-wrap w-5/6 2xl:w-2/3 mx-auto;

    .recent-post {
      @apply w-full md:w-1/2 px-0 md:pr-6 xl:pr-12 mb-12;
      &.second { @apply px-0 md:pl-6 xl:pl-12; }

      .image-container {
        @apply w-auto h-76 md:h-56 lg:h-76 mb-6 bg-fwhite overflow-hidden flex place-content-center
        border-solid border-2 border-faqua rounded-xl cursor-pointer;
        img {
          object-fit: cover;
          width: 100%;
        }
      }

      .title {
        @apply text-fpink cursor-pointer;
        font-stretch: 115%;
        @media(max-width: 767px) {
          @apply text-2xl;
        }
      }

      .author-date {
        @apply mt-1 text-base text-faqua;
        .date {
          @apply text-sm text-fwhite;
        }
        .author {
          @apply text-fwhite;
        }
      }

      .preview-text {
        @apply mt-4 text-lg xl:text-xl font-medium;
        line-height: 1.5;
      }
    }

    .past-posts {
      @apply inline-block flex flex-col justify-between content-center text-center
      w-full md:w-1/2 min-h-76 md:min-h-76 md:pr-6 mt-24 mb-12;
      .header {
        h2 {
          @apply inline-block py-0.5 px-8 xs:px-16 md:px-8 text-fwhite bg-fblue rounded
          text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl;
        }

        .loop-arrow {
          @apply absolute w-24 xl:w-26 2xl:w-28 3xl:w-30 -left-8 xs:left-0 sm:left-6 md:-left-12 lg:left-4 xl:left-6 2xl:-left-6 top-2;
        }
      }

      .title {
        @apply px-24 hover:cursor-pointer text-3xl md:text-2xl xl:text-3xl;
      }
    }

    .blog-with-us {
      @apply w-full md:w-1/2 min-h-76 md:pl-6 mt-24 mb-12;

      .header {
        @apply flex content-center w-full text-center;
        h2 {
          @apply text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl;
        }
        .arrow {
          @apply inline-block w-1/5 animate-pulse;
          //&.left { @apply invisible md:visible; }
          &.right { @apply rotate-180; }
        }
        .title {
          @apply inline-block w-3/5;
        }
      }

      .click-here {
        @apply text-center w-full my-4;
        span {
          @apply mx-auto text-xl text-fblurple hover:cursor-pointer;
        }
      }

      .coconut-drinks {
        @apply w-76 mx-auto;
      }
    }
  }

  .orange-lines {
    @apply w-full mt-24 md:mt-42;

    .line-one, .line-two, .line-three {
      @apply w-full h-3 mt-6 bg-forange rounded-full;
    }

    .line-one {
      margin-left: 15%;
    }
    .line-two {
      margin-left: 10%;
    }
    .line-three {
      margin-left: 5%;
    }
  }

  .anchor {
    @apply absolute -top-24 md:-top-48;
  }

}


</style>
