<template>
  <mdb-container>
    <!-- trigger modal button -->
    <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
    <!-- poll modal -->
    <mdb-modal :show="poll" @close="poll = false" fullHeight info removeBackdrop>
      <mdb-modal-header center :close="false">
        <p class="heading lead " color="primary">Login</p>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="text-center">
          <mdb-icon icon="file-text-o" size="4x" class="mb-3 animated rotateIn"/>
          <p><strong>Your opinion matters</strong></p>
          <p>Have some ideas how to improve our product?
          <strong>Give us your feedback.</strong></p>
        </div>
        <hr/>
        <p class="text-center">
          <strong>Your rating</strong>
        </p>

        <mdb-input type="text"
          id="option1-1"
          name="option1"
          value="option1"
          label="Very good"
        />
        <mdb-input type="text"
          id="option1-2"
          name="option1"
          value="option2"
          label="Good"
        />
        <mdb-input type="text"
          id="option1-3"
          name="option1"
          value="option3"
          label="Mediocre"
        />
        <p class="text-center">
          <strong>What could we improve?</strong>
        </p>
        <mdb-textarea :rows="3" label="Your message"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="primary" @click="poll = false" icon="paper-plane" iconRight iconClass="ml-1 white-text">Send</mdb-btn>
        <mdb-btn outline="primary" @click="poll = false">Cancel</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput, mdbTextarea } from 'mdbvue';
  export default {
    name: 'ModalExamplesPage',
    components: {
      mdbContainer,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter,
      mdbInput,
      mdbTextarea
    },
    data() {
      return {
        poll: false,
      }
    }
  }
</script>
