# Neu Modal

Neu-modal is a simple lightweight and a cross framework library for managing modals inside any type of project. It was built for modern browsers using Stencil JS, TypeScript, HTML5 and SCSS.

Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.

## Getting Started

To use neu-modal in your project install it via npm:

```bash
npm i neu-modal
```

Tag 

```bash
<neu-modal size="md">
    <div slot="header"> ... </div>
    <div slot="body"> ... </div>
    <span slot="footer"> ... </div>
</neu-modal>
```

Attributes

```bash 
<neu-modal size="md" showcancel="true" showcancelicon="false" id="myFirstModal" footer="true" header="true"> </neu-modal>

id="anyIdName"  //ID is ref to call your modal
size="md"  //To define the size of your modal (sm, md, lg)
showcancel="true"     //To show or hide Cancel Button in footer - default true
showcancelicon="false"  //To show or hide Cancel Icon in header - default true
footer="true" //To show or hide modal footer - default true
header="true" //To show or hide modal header - default true
```

Method

```bash
openModal()

onModalClose()
```

How to Trigger Modal in Native JavaScript

```bash
 function openModalHandiler() {
            var neuModalRef = document.body.querySelector('#myFirstModal');
            neuModalRef.openModal();  
        }
```

Your done!