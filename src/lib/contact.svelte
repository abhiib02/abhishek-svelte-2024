<form
    class="container"
    action="https://formsubmit.co/abhiib02@gmail.com"
    method="POST"
>
    <div class="card Contact flex-col-between">
        <div class="">
            <img src="../icons/contact.svg" class="icon" alt="" />
        </div>
        <div class="heading">CONTACT</div>
    </div>

    <div class="card Contact-form flex-col-between" id="form">
        <div class="heading">Contact Form</div>
        <div>
            <input
                class="form-control"
                type="text"
                placeholder="Name"
                name="name"
                autocomplete="off"
            />
            <br />
            <br />

            <input
                class="form-control"
                type="email"
                placeholder="Email"
                name="email"
                autocomplete="off"
            />
            <br /><br />

            <input
                class="form-control"
                type="text"
                placeholder="Message"
                name="message"
                autocomplete="off"
            />
        </div>
    </div>
    <button class="card form-submit btn-bg grid-center">
        <div class="heading">Submit</div>
    </button>
    <div class="card Footer grid-center">
        <div class="heading">
            Made With 💓 using <img
                src="/icons/svelte.svg"
                width="32px"
                alt=""
            />
        </div>
    </div>
    <div class="card Contact-desc grid-center">
        <div style="text-align:center;">
            <div class="heading">Lets Get in Touch</div>
            <div class="desc">I am always open to make new friends</div>
        </div>
    </div>
    <a
        target="_blank"
        href="https://github.com/abhiib02"
        class="card github grid-center box-icon"
    >
        <img src="../icons/github.svg" alt="" class="icon" />
    </a>
    <a
        target="_blank"
        href="https://codepen.io/abhishek-bhardwaj"
        class="card codepen grid-center box-icon"
    >
        <img src="../icons/codepen.svg" alt="" class="icon" />
    </a>
    <a
        target="_blank"
        href="https://www.linkedin.com/in/abhishek-bhardwaj-191b9784/"
        class="card linkedin grid-center box-icon"
    >
        <img src="../icons/linkedin.svg" alt="" class="icon" />
    </a>
    <a
        target="_blank"
        href="https://twitter.com/Abhiib02"
        class="card twitter grid-center box-icon"
    >
        <img src="../icons/x.svg" alt="" class="icon" />
    </a>
    <a
        target="_blank"
        href="https://www.instagram.com/abhiib02/"
        class="card insta grid-center box-icon"
    >
        <img src="../icons/insta.svg" alt="" class="icon" />
    </a>
    <a target="_blank" href="" class="card resume grid-center box-icon">
        <img src="../icons/resume.svg" alt="" class="icon" />
    </a>
</form>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: var(--gap);
        height: 100%;
        grid-auto-flow: row;
        grid-template-areas:
            "Contact Contact Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-form Contact-form Contact-form Contact-form"
            "Contact Contact Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-form Contact-form Contact-form Contact-form"
            "Contact Contact Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-form Contact-form Contact-form Contact-form"
            "Contact Contact Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc Contact-desc form-submit form-submit form-submit form-submit"
            "Contact Contact github github codepen codepen linkedin linkedin Footer Footer Footer Footer"
            "Contact Contact twitter twitter insta insta resume resume Footer Footer Footer Footer";
    }

    .Contact {
        grid-area: Contact;
    }

    .Contact-form {
        grid-area: Contact-form;
    }

    .form-reset {
        grid-area: form-reset;
    }

    .form-submit {
        grid-area: form-submit;
    }

    .Footer {
        grid-area: Footer;
    }

    .Contact-desc {
        grid-area: Contact-desc;
    }

    .github {
        grid-area: github;
    }

    .codepen {
        grid-area: codepen;
    }

    .linkedin {
        grid-area: linkedin;
    }

    .twitter {
        grid-area: twitter;
    }

    .insta {
        grid-area: insta;
    }

    .resume {
        grid-area: resume;
    }
    .form-control {
        width: calc(100% - var(--main-padding));
        height: 30px;
        padding: var(--main-padding) 0;
        background-color: #000;
        border: 1px solid var(--theme-color);
        border-radius: var(--in2-brd-rad);
        padding-left: var(--main-padding);
    }
</style>
