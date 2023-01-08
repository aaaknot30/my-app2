<script>
import { fishArr } from '../fish/store.js';

let finalFishArr;
	fishArr.subscribe(value => {
		finalFishArr = value;
	});

</script>



<div class="index">
  <h2>About</h2>
  {#each finalFishArr as fish}
    {fish}
  {/each}
  <p>Quo quae perferendis vel dignissimos quasi illum aperiam dolores, id, laudantium voluptatibus fugiat accusantium 
    impedit velit modi ratione iure qui culpa! Repellendus cupiditate aliquid quam magni. Laudantium, laboriosam 
    quibusdam. Provident, quae incidunt! Aspernatur, vel?  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Sunt laborum magnam deleniti recusandae, quis aperiam, architecto neque, voluptatem dicta expedita aut id voluptate 
    omnis consectetur dolore! </p>

</div>

<style>
  h2 {
    margin-top: 0;
  }
</style>
