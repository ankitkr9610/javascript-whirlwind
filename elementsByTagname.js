{/* <h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p> */}


  function byTagName (node, tagName) {
    const total = [];
    tagName = tagName.toUpperCase();

    function explore (node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];        
        if (child.nodeType === Node.ELEMENT_NODE){
          if (child.nodeName === tagName) { 
            total.push(child)
          }
          explore(child);
        }
      }
    }

    explore(node);
    return total;

  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2