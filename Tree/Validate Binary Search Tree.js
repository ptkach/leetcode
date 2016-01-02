/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isValidBST = function(root) {

 var valid = true, pv;

 var inorder = function (node) {

   if (!node || !valid) return;

   inorder(node.left);

   if (pv && pv.val >= node.val) valid = false;
   pv = node;

   inorder(node.right);

 };

 inorder(root);

 return valid;
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var isValidBST = function(root) {

  if (!root) {
    return true;
  }

  return valid(root, Number.NEGATIVE_INFINITY, Number.MAX_VALUE);

};

var valid = function (r, min, max) {

  if (!r) {
    return true;
  }

  if (min < r.val
    && r.val < max
    && valid(r.left, min, r.val)
    && valid(r.right, r.val, max)
  ) {
    return true;
  } else {
    return false;
  }

};
