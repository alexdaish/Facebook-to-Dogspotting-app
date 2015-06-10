walk(document.body);

document.title = replaceText(document.title);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
	
	// Facebook
	v = v.replace(/\bFacebook\b/g, "the Dogspotting app");
	v = v.replace(/\bfacebook\b/g, "the Dogspotting app");
	v = v.replace(/\bFacebook's\b/g, "the Dogspotting app's");
	v = v.replace(/\bfacebook's\b/g, "the Dogspotting app's");

	return v;
}
