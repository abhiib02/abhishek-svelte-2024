<form
    class="container"
    action="https://airform.io/abhiib02@gmail.com"
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
    <a target="https://mail.google.com/mail/u/0/?fs=1&to=abhiib02@gmail.com&tf=cm" href="" class="card resume grid-center box-icon">
        <img src="../icons/gmail.svg" alt="" class="icon" />
    </a>
    <div class="card Contact-desc grid-center">
        <div style="text-align:center;">
            <div class="heading">Lets Get in Touch</div>
            <div class="desc">
                I am always open to make new friends
                Mail me @ <a href="mailto:abhiib02@gmail.com">abhiib02@gmail.com</a>
            </div>
            
        </div>
    </div>
    <div class="card Footer grid-center">
        <div class="heading">
            Made With 💓 using <img
                src="/icons/svelte.svg"
                width="32px"
                alt=""
            />
        </div>
    </div>
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
        @media (width < 992px) {
            display: flex;
            flex-direction: column;
        }
    }
    .box-icon {
        @media (width < 992px) {
            display: none;
        }
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
        background: linear-gradient(to right, #606c88, #3f4c6b);
    }

    .codepen {
        grid-area: codepen;
        background: linear-gradient(to right, #666600, #999966);
    }

    .linkedin {
        grid-area: linkedin;
        background: linear-gradient(to right, #56ccf2, #2f80ed);
    }

    .twitter {
        grid-area: twitter;
        background: linear-gradient(to right, #000000, #434343);
    }

    .insta {
        grid-area: insta;
        background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
        );
    }

    .resume {
        grid-area: resume;
        background: linear-gradient(to right, #f2994a, #f2c94c);
    }
    .form-control {
        width: calc(100% - var(--main-padding));
        height: 30px;
        padding: var(--main-padding) 0;
        background-color: #000;
        border: 1px solid var(--theme-color);
        border-radius: var(--in2-brd-rad);
        padding-left: var(--main-padding);
        @media (width < 992px) {
            height: auto;
        }
    }
    .desc {
        font-size: 1rem;
    }
</style>
