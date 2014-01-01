queens();

function queens()
{
	var candidates = permutations([0, 1, 2, 3, 4, 5, 6, 7]);
	for (var i=0; i<candidates.length; i++)
	{
		if (okay(candidates[i]))
		{
			display(candidates[i]);
		}
	}
}

function display(board)
{
	document.write('<table border="1">');
	for (var r=0; r<8; r++)
	{
		document.write('<tr>');
		for (var c=0; c<8; c++)
		{
			document.write('<td>');
			document.write(board[r] == c ? '*' : '&nbsp;');
			document.write('</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}

function okay(candidate)
{
	var ldiags = [], rdiags = [];
	
	for (var i=0; i<candidate.length; i++)
	{
		var 
			l = i + candidate[i],
			r = i - candidate[i];
			
		if (ldiags.indexOf(l) != -1 || rdiags.indexOf(r) != -1)
			return false;
			
		ldiags.push(l);
		rdiags.push(r);
	}
	
	return true;
}


function permutations(list)
{
	// Empty list has one permutation
	if (list.length == 0)
		return [[]];
		
		
	var result = [];
	
	for (var i=0; i<list.length; i++)
	{
		// Clone list
		var copy = Object.create(list);

		// Cut one element from list
		var head = copy.splice(i, 1);
		
		// Permute rest of list
		var rest = permutations(copy);
		
		// Add head to each permutation of rest of list
		for (var j=0; j<rest.length; j++)
		{
			var next = head.concat(rest[j]);
			result.push(next);
		}
	}
	
	return result;
}
