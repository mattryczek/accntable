<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@comp/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="about container mt-3">
    <h1>Who We Are</h1>
    <p class="mb-4">
      In Accntable, our goal is to introduce a rating system to the rental property landscape. The
      market is saturated with sites that allow the tenants to rate the property. Our rating system
      focuses on the landlord/property manager and tenant dynamics.
    </p>

    <h1>Why We are</h1>
    <p class="mb-4">
      Since there are 44 million renters in the United States, there are several rental property
      listing websites that have gained popularity over the years. Their feature sets vary greatly,
      and they do not capture all the details of the property. This means that renters would need to
      look at several websites to review all the features of a home from different sources.
      Meanwhile, there are rental websites that do seem more of a paid advertisement for a certain
      property. The top search results for a property typically goes to the highest bidder as
      opposed to the highest quality property. There are several opportunities for our application.
      There is value in being the one stop resource for renters. While using our intuitive search
      features, this will reduce the amount of time spent on validating house features on listings.
      In this landscape, transparency is highly regarded by consumers. With our rating systems, both
      renters and landlords can feel even more confident with executing agreements.
    </p>

    <h1>What We Are</h1>
    <p class="mb-4">
      The most common trend for features for property rental websites is being able to search via
      text, map, and user preferences. Our application will incorporate these features since
      familiarity can work in our favor in terms of user adoption. At the end of the day, the core
      feature of this application is searching through properties. While we store the most common
      information such as the number of bedrooms and bathrooms, our application can also show the
      violations in a building. As mentioned in the discovery document, there is an increasing
      number of deficiencies in basic requirements such as heat and plumbing in rental properties.
      With this additional information, our search system can consider ratings and house features to
      produce listings within the search parameters.
    </p>
  </div>
  <Footer />
</template>
