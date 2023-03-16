<template>
<div class="home">
  <covidHeader/>
  <covid19Info/>
</div>

</template>

<script>
import covidHeader from "../components/covidHeader";
import covid19Info from "../components/covid19Info";

export default {
  name: 'HomeView',
  components: {
    covidHeader, covid19Info,
  }
}
</script>
