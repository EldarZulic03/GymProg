<script>
  let showBox = false;

  function toggleBox() {
    showBox = !showBox;
    console.log("Toggle box, showBox is now:", showBox);
  }

  function handleBoxClick() {
    console.log("Floating box clicked!");
  }
</script>

<page>
  <gridLayout rows="*, auto" columns="*">
    <stackLayout row="0" col="0">
      <!-- Other content goes here -->
    </stackLayout>

    <button
      row="1"
      col="0"
      text="+"
      width="50"
      height="50"
      backgroundColor="#007AFF"
      color="white"
      borderRadius="25"
      fontSize="24"
      horizontalAlignment="right"
      verticalAlignment="bottom"
      margin="0 30 20 0"
      on:tap={toggleBox}
    />

    {#if showBox}
      <absoluteLayout row="1" col="0" width="100%" height="100%" zIndex="1">
        <label
          text="This is a floating box."
          backgroundColor="white"
          padding="10"
          borderColor="#ccc"
          borderWidth="1"
          borderRadius="5"
          shadowColor="#000"
          shadowOffset="0 2"
          shadowOpacity="0.1"
          shadowRadius="10"
          left="70%"
          width="200"
          height="100"
          on:tap={handleBoxClick}
        />
      </absoluteLayout>
    {/if}
  </gridLayout>
</page>
