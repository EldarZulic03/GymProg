<script>
  import { isIOS, isAndroid } from "tns-core-modules/platform";
</script>

<page>
  <actionBar title="Gym Progress Tracker" />

  <!-- FlexboxLayout or StackLayout can help with positioning -->
  <flexboxLayout flexDirection="column">
    <!-- TabView at the top -->
    <tabView flexGrow="0">
      <tabViewItem title="Track Your Lifts">
        <!-- Import Track your lifts page -->
      </tabViewItem>
      <tabViewItem title="Track your macros">
        <!-- Import track your macros page -->
      </tabViewItem>
      <tabViewItem title="Calendar">
        <!-- Import calendar so people can go back and view their lifts and macros for that day -->
      </tabViewItem>
    </tabView>

    <!-- Content below TabView -->
    <stackLayout flexGrow="1">
      <!-- Additional content here if needed -->
    </stackLayout>
  </flexboxLayout>
</page>

<!-- 
<style>
  .info .fas {
    color: #3a53ff;
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style> -->
