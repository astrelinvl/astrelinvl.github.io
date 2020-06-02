
function lengthBasket(){
    // if()
    return (getCartData()==null ? 0 : Object.keys(getCartData())).length;
}

$("#basket-count").text(lengthBasket());
var d = document,
    itemBox = d.querySelectorAll('.basket-js'),
    cartCont = d.getElementById('cart_content');

function addEvent(elem, evType, fn) {
	if (elem.addEventListener) {
		elem.addEventListener(evType, fn, false)
                return fn
	}
        iefn = function() { fn.call(elem) } 
        elem.attachEvent('on' + evType, iefn);
	return iefn
}


function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}


function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}


function addToCart(e){
    this.disabled = true;

    var title_page = window.location.href.split("/");

    if(title_page[title_page.length-1]=="view.html"){

        var cartData = getCartData() || {}, itemTitle = $(".view-label").text(),itemImg = $(".box__img").attr('src');  
        var cart = $('.basket img').offset(); 
        var basket_but = $(this).offset();
        $(this).after('<div class="animtocart"></div>'); 
        $('.animtocart').css({ 
            'border-radius': '100%',
            'height': '45px',
            'width': '45px',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'background-image': 'url(img/basket/basket_add_hover.svg)',
            'background-size': 'cover',
            'position' : 'absolute',
            'z-index' : '9999999999',
            'left' : $(this).pageX-45,
            'top' : $(this).pageY-45,
        }); 
        $('.animtocart').animate({ top: cart.top+14 + 'px', left: cart.left+14 + 'px', width: 0, height: 0 }, 800, function(){ 
            $(this).remove();
        });

    }else{
        // var cartData = getCartData() || {}, itemTitle = $(".view-label").text(),itemImg = $(".view-item img").attr('src');  
        var cart = $('.basket img').offset(); 
        var basket_but = $(this).offset();
        var cartData = getCartData() || {}, itemTitle = $(this).siblings(".box__txt").text(),itemImg = $(this).siblings(".box__img").attr('src');  
        $(this).append('<div class="animtocart"></div>'); 
        $('.animtocart').css({ 
            'border-radius': '100%',
            'height': '45px',
            'width': '45px',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'background-image': 'url(img/basket/basket_add_hover.svg)',
            'background-size': 'cover',
            'position' : 'absolute',
            'z-index' : '9999999999',
            'left' : $(this).pageX-45,
            'top' : $(this).pageY-45,
        }); 
        $('.animtocart').animate({ top: cart.top-basket_but.top+14 + 'px', left: cart.left-basket_but.left+14 + 'px', width: 0, height: 0 }, 800, function(){ 
            $(this).remove();
        });
    }
    
    if(cartData.hasOwnProperty(itemTitle)){ 
        cartData[itemTitle][1] += 1;
    } else { 
        cartData[itemTitle] = [itemImg , 1];
        $("#basket-count").text(lengthBasket()+1);
    }
    if(!setCartData(cartData)){ 
        this.disabled = false;
    }
    return false;
}

function delToCartItem(e){
    this.disabled = true;
    var cartData = getCartData() || {};
    var item = this.parentNode; 
    delete cartData[item.querySelector('.basket-item_text').textContent];
    item.remove();
    $("#basket-count").text(lengthBasket()-1);
    if(!setCartData(cartData)){
        this.disabled = false;
    }
    if(lengthBasket()==0){
        $(".basket-page").remove();
        $(".title").remove();
        var basket_item = '<div class="title m-tb_15px">КОРЗИНА ПУСТА</div>';
        $(".content").append(basket_item);
        // console.log('удаление линии');
    }
    return false;
}

for(var i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i], "click", addToCart);
}

function basketAddEvent(){
    addEvent(document.querySelectorAll('.basket-js'), "click", addToCart);
}


function basketDelEvent(){
    var basket_delete =  d.querySelectorAll('.basket-item_delete');
    for(var j = 0; j < basket_delete.length; j++){
        addEvent(basket_delete[j], "click", delToCartItem);
    }
}

// function openCart(e){
//     var cartData = getCartData(), totalItems = '';
    
//     if(cartData !== null){
//         for(var items in cartData){
//             var basket_item = '<div class="basket-item"><div class="item"><img src="'+cartData[items][0]+'" alt=""></div><div class="basket-item_text">'+items+'</div><div><input class="basket-item_count" type="number" value="'+cartData[items][1]+'" min="0"></div><div class="basket-item_delete">удалить</div></div>';
//             $(".line").after(basket_item);
//         }
//     } else {
//     }
//     return false;
// }

function openCart(e){
    var cartData = getCartData(), totalItems = '';
    var start = '<div class="title m-tb_15px">КОРЗИНА</div> <div class="basket-page"> <div class="basket-label"> <div>ТОВАР</div> <div></div> <div>КОЛИЧЕСТВО</div> <div></div> </div> <div></div> <div class="basket-content"> <div class="line"></div>';
    var finish = '</div> <div> <input class="button" type="button" value="ЗАКАЗАТЬ"> </div> </div>';
    if(lengthBasket()!== 0){
        // console.log('Корзина полна!');
        $(".content").append(start);
        for(var items in cartData){
            var cartData = getCartData(), totalItems = '<div class="basket-item"><div class="box square"><img class="box__img" src="'+cartData[items][0]+'" alt=""></div><div class="basket-item_text">'+items+'</div><div><input class="basket-item_count" type="number" value="'+cartData[items][1]+'" min="0"></div><div class="basket-item_delete">удалить</div></div>';
            $(".basket-content").append(totalItems);
        }
        $(".basket-content").after(finish);
    } else {
        var basket_item = '<div class="title m-tb_15px">КОРЗИНА ПУСТА</div>';
        $(".content").append(basket_item);
        // console.log('Корзина пуста!');
    }
    return false;
}


// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
// /* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function(e){
//   localStorage.removeItem('cart');
//   cartCont.innerHTML = 'Корзина очишена.';
// });