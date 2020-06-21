class ListNode {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}
/**
 * Initialize your data structure here.
 */
class MyLinkedList {
    constructor() {
        this.size = 0;
        this.head = new ListNode(0);  // 伪头
        this.tail = new ListNode(0);  // 伪尾
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let cur = this.head;
        if (index < this.size - index) {
            for (let i = 0; i <= index; ++i) cur = cur.next;
        } else {
            cur = this.tail
            for (let i = 0; i < this.size - index; ++i) cur = cur.prev;
        }
        return cur.val;
    }

    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let cur = new ListNode(val), prev = this.head, next = this.head.next;
        this._addItem(cur, prev, next);
    }

    /**
     * Append a node of value val to the last element of the linked list. 
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let cur = new ListNode(val), next = this.tail, prev = this.tail.prev;
        this._addItem(cur, prev, next);
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) return;
        if (index < 0) index = 0;
        let prev = this._getItem(index - 1);
        let next = prev.next;
        let cur = new ListNode(val);
        this._addItem(cur, prev, next);
    }

    /**
     * Delete the index-th node in the linked list, if the index is valid. 
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (this.size === 0 || index < 0 || index >= this.size) return;
        const prev = this._getItem(index - 1);
        const next = prev.next.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
    _addItem(cur, prev, next) {
        cur.prev = prev;
        cur.next = next;
        prev.next = cur;
        next.prev = cur;
        this.size++;
    }

    _getItem(index) {
        if (this.size === 0 || index < 0) return this.head;
        if (index >= this.size) return this.tail;
        let cur = this.head;
        if (index < this.size - index) {
            for (let i = 0; i <= index; i++) cur = cur.next;
        } else {
            cur = this.tail
            for (let i = 0; i < this.size - index; i++) cur = cur.prev;
        }
        return cur;
    };
}



/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */