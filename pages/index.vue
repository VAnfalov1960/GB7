<template>
  <div>
    <h1 hidden="true">Курсовая работа "Интернет магазин на Vue"</h1>
    <Header />
    <CollectionBanner />
    <br /> <br />
    <Slider />
    <Footer />
  </div>
</template>

<script>
  import Header from "./../components/header/header1";
  import Slider from "./shop/components/slider";
  import CollectionBanner from "./shop/components/collection_banner";
  import Footer from "../components/footer/footer"

  export default {
    components: {
      Header,
      Slider,
      CollectionBanner,
      Footer 
    }
  };
</script>
