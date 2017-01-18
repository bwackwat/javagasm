
	<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" dir="ltr" >
    <head>
                      <base href="http://www.apptha-demo.com/extensions/socialpinboard/index.php/component/socialpinboard/home" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="description" content="Social Pinboard" />
  <meta name="generator" content="Joomla! - Open Source Content Management" />
  <title>Social Pinboard</title>
  <link href="/extensions/socialpinboard/templates/socialpinboard/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/facebox.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/style.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/reset.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/pinboard.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/modules/mod_socialpinboard_menu/css/socialpinboard_menu.css" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/jquery.ui.core.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/chrome.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/facebox.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/scroll/jquery.isotope.min.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/scroll/jquery.infinitescroll.min.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/media/system/js/core.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/templates/socialpinboard/js/socialpinboard.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/templates/socialpinboard/js/scrolldown.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/modules/mod_socialpinboard_menu/js/ajaxupload.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/modules/mod_socialpinboard_menu/js/loginvalidation.js" type="text/javascript"></script>


            <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
            
                    <link rel="stylesheet" href="/extensions/socialpinboard/templates/socialpinboard/css/template.css" type="text/css" />
            <link rel="stylesheet" href="/extensions/socialpinboard/templates/socialpinboard/css/reset.css" type="text/css" />
                <script type="text/javascript">var scr = jQuery.noConflict(); </script>
    </head>
    	<body id="CategoriesBarPage">
                    <div id="Header" class="clearfix">           
            
             <div class="logoheader">
                 <h1 id="logo"> <a href="http://www.apptha-demo.com/extensions/socialpinboard/" >
                    
                                        <img src="http://www.apptha-demo.com/extensions/socialpinboard//templates/socialpinboard/images/Logo.png" alt="" />
                                         </a>
                   
                </h1>
            </div>
            <div id="header_top_right">
                <style>
.customStyleSelectBox{margin-bottom:10px;}
</style>
<div id="social_menu">
    <ul id="pin-header-menu">
                    
                <li>
                    <a href="#" class="" onclick="Modal.show('Add'); return false">
                        Add +                        <span class=""></span>
                    </a>
                </li>
            
                <li style="cursor: pointer;"> <a href="#" class="nav about ">About us<span></span></a>
            <ul>
                <li  class="hover-me" > <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pinit"   >Pin It</a> </li>            </ul>
        </li>
        
        <li class="customer_grid" style="cursor: pointer;">
                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay" class="nav LoginNav">
                                            <img src="http://www.apptha-demo.com/extensions/socialpinboard//images/socialpinboard/avatars/MikeVihuela863.jpg" width="30" height="30"/>
                                            <h6>Mike</h6>
                </a>
                <ul class="pin-login-drop">
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/invitefriends">Invite Friends</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/invitefriends/facebook">Find Friends</a></li>
                    <li class="beforeDivider"><a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay">Boards</a></li>
                    <li class="divider"><a href="/extensions/socialpinboard/index.php/component/socialpinboard/pindisplay">Pins</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/likes">Likes</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/profile">Settings</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/people/logout">Logout</a></li>
                </ul>
                    </li>
        
    </ul>
     <ul id="solcial_links">
                    <li><a href="http://www.facebook.com/apptha" target="_blank"><img src="http://www.apptha-demo.com/extensions/socialpinboard//templates/socialpinboard/images/facebook-btn.png" title="Facebook" alt="Facebook" /></a></li>
                    <li><a href="https://twitter.com/apptha" target="_blank"><img src="http://www.apptha-demo.com/extensions/socialpinboard//templates/socialpinboard/images/twitter-btn.png" title="Twitter" alt="Twitter" /></a></li>
                </ul>
        
        <div id="Add" class="ModalContainer">
            <div class="modal wide PaddingLess">
                <div class="header lg"> <a href="#" class="close" onclick="Modal.close('Add'); return false"><strong>Close</strong><span></span></a>
                    <h2>Add</h2>
                </div>
                <p id="PinIt">Pin images from any website as you browse the web with the <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pinit" onclick="load_url(); return false">&ldquo;Pin It&rdquo; button</a>.</p>
                <div id="OpenLinks"> <a href="#" id="OpenScrapePin" class="cell" onclick="addClear();AddDialog.close('Add', 'ScrapePin'); return false">
                        <div class="menuAddUrl" id="scrape"></div>
                        <span>Add a Pin</span> </a> 
                    <script type="text/javascript">
                         
                        function addClear()
                        {
                            document.getElementById('ScrapePinInput').style.color="#C9C8C8";
                            document.getElementById('getImg').innerHTML = '';
			    document.getElementById('txtpin').style.color="#C9C8C8";
                            document.getElementById('txtpin').value = "Please Enter Description";
                            document.getElementById('srcimg').value='';
                        }
                    </script> 
                    <a id="OpenUploadPin" class="cell" onclick="AddDialog.close('Add', 'UploadPin'); return false">
                        <div class="imageUpload" id="upload"></div>
                        <span>Upload a Pin</span> </a> <a id="OpenCreateBoard" class="cell" onclick="AddDialog.close('Add', 'CreateBoard'); CreateBoardDialog.reset(); return false">
                        <div class="menuCreateBoard" id="board"></div>
                        <span>Create a Board</span> </a> </div>
            </div>          
            <div class="overlay"></div>
        </div>
        <div id="ScrapePin" class="ModalContainer">
            <div class="modal wide">
                <div class="header lg"> <a href="#" class="close" onclick="return addPinclose();" ><strong>Close</strong><span></span></a>
                    <h2>Add a Pin</h2>
                </div>
                <div class="PinTop inputHolder scrapePin"> 
                    <form method="post" action="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay" name="frmUrl" id="frmUrl">
                        <ul class="Form FancyForm">
                            <li>
                                <input id="ScrapePinInput" name="ScrapePinInput" type="text" value="Enter URL to find images"  onFocus="this.style.color='#333333';if(this.value == 'Enter URL to find images') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'Enter URL to find images'}" autocomplete="off"/>
                                <a href="javascript:void(0);" id="ScrapeButton" onclick="loadXMLDoc(); return false;" class="Button WhiteButton Button18 floatRight"><strong>Find Images</strong></a> 
                                <a href="javascript:void(0);" style="display: none;" id="ScrapeButton1" class="Button WhiteButton Button18 floatRight"><strong>Find Images...</strong></a>
                                <div style="clear:both;"></div>
                                <div class="example_link">eg: http://www.example.com </div>
                                <div id="urlImages" style="display:none;">
                                    <div class="site_img">
                                        <div class="ImagePicker">
                                            <div class="price"></div>
                                            <div class="Images pin" id="getImg"> </div>
                                        </div>
                                        <div class="navigation"> <a type="button" onclick="return nextPrev('prev')" name="prev" id="prev">&#171; Previous</a> <a type="button" onclick="return nextPrev('next')" name="next" id="next">Next &#187;</a> </div>
                                    </div>
                                    <input type="hidden" name="imgcnt" id="imgcnt" value="0"/>
                                    <div id="getimg_desc">
                                        <select name="pin_board" id="pin_board">
                                                                                            <option value="305" >Me and Me</option>
                                                                                            <option value="306" >Favorite Places & Spaces</option>
                                                                                            <option value="307" >Books Worth Reading</option>
                                                                                            <option value="308" >My Style</option>
                                                                                            <option value="309" >For the Home</option>
                                                                                    </select>
<!--                                         <select name="categories" id="pin_board">
                                                                                            <option value="1" >Arts</option>
                                                                                            <option value="4" >Drinks</option>
                                                                                            <option value="2" >Education</option>
                                                                                            <option value="3" >Food</option>
                                                                                            <option value="5" >Hair and Beauty</option>
                                                                                    </select>-->
                                        <div class="clearfix">
                                            <div class="uploadtext">
                                                <input style="color:#C9C8C8" type="text" name="uploadboardtxted" id="uploadboardtxted"onFocus="onFocusMenu(this,'Enter New Board Name');" onBlur="onBlurEvent(this,'Enter New Board Name');" value="Enter New Board Name" />
                                            </div>
                                            <div class="special" style=""><a href="javascript:void(0);" class="creat_bttn" id="board_creat_btn" onclick="addnewmenupin(863)" style="display:block">
                                                Create</a></div>
                                            <div id="boardErrorpin" class="clearfix"></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="clearfix" id="add_pin_desc">
                                            <div class="InputArea">
                                                <ul class="Form FancyForm">
                                                    <li class="noMarginBottom ">
                                                        <textarea class="DescriptionTextarea" value="Please Enter Description" style="color:grey; resize: none;" id="txtpin" rows="2" name="txtpin"  onFocus="onFocusMenu(this,'Please Enter Description');" onBlur="onBlurEvent(this,'Please Enter Description');" >Please Enter Description</textarea>
                                                        <span class="fff"></span> </li>
                                                </ul>
                                            </div>
                                            <div id="addpinerror"></div>
                                        </div>
                                        <div id="addError"></div>
                                        <input type="hidden" name="srcimg" id="srcimg" value=""/>
                                        <div id="downloadImages"></div>
                                        <input type="hidden" name="create_dates" id="create_dates" value="2013-02-11 06:38:06"/>
                                        <input type="submit"  name="add_pin" onclick="return validateImageUrl();" style="display: block" id="add_pin" value="Pin It"/>

                                        <strong class="edit-board-btn pinning" id="add_pining" style="display:none;">Pinning...</strong> </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div class="overlay"></div>
        </div>

        <!-- End of the Add pin--> 
        <!-- Upload the pin-->
        <div id="UploadPin" class="ModalContainer">
            <div class="modal wide" id="upload_pin_pic">
                <div class="header lg"> <a href="#" class="close" onclick="javascript:document.getElementById('upload_image_popup').style.display = 'none';javascript: document.getElementById('pricetags').style.display='none';javascript:document.getElementById('boardError').innerHTML = '';AddDialog.childClose('Add','UploadPin'); return false"><strong>Close</strong><span></span></a>
                    <h2>Upload a Pin</h2>
                    <div id="file_ext_error" style="display: none"></div>
                </div>
                <div class="PinTop">
                    <form action="" id="imageform" method="POST" enctype="multipart/form-data">
                        <div id="me" class="styleall" style=" cursor:pointer;"><span> Upload Image</span></div>
                        <span id="mestatus" ></span>
                        <div id="upload_image_popup" style="display:none;">
                            <div id="upload_pin" style="display:none;">
                                <div class="ImagePicker" id="pricetags" > <img class="Images pin" id="upload_img_popup" name="upload_img_popup"  alt="change image"  /> </div>
                                <ul class="img_upload">
                                    <li>
                                        <select class="customStyleSelectBox" name="upload_board" id="upload_board"  onchange="changeselected(this)">
                                                                                            <option value="305" > Me and Me</option>
                                                                                                <option value="306" > Favorite Places & Spaces</option>
                                                                                                <option value="307" > Books Worth Reading</option>
                                                                                                <option value="308" > My Style</option>
                                                                                                <option value="309" > For the Home</option>
                                                                                        </select>
                                        
<!--                                        <select class="customStyleSelectBox"  name="category_upload" id="category_upload"  onchange="changeselected(this)">
                                                                                            <option value="1"> Arts</option>
                                                                                                <option value="4"> Drinks</option>
                                                                                                <option value="2"> Education</option>
                                                                                                <option value="3"> Food</option>
                                                                                                <option value="5"> Hair and Beauty</option>
                                                                                        </select>-->
                                       
                                        <input type="hidden" name="board_selection" id="board_selection" value="305"/>
                                        <input type="hidden" name="image_id" id="image_id" value=""/>
                                        <div class="uploadtext">
                                            <input style="color:#C9C8C8" type="text" name="uploadboardtxt" id="uploadboardtxt" onFocus="onFocusMenu(this,'Enter New Board Name');" onBlur="onBlurEvent(this,'Enter New Board Name');" value="Enter New Board Name"/>
                                        </div>
                                        <div class="special" style=""><a href="javascript:void(0);" class="creat_bttn" onclick="addnewmenuboard(863)" style="display:block">
    Create 
                                            </a></div>
                                        <div id="boardError" style="clear: both; margin: 0 0 0 23px; "></div>
                                    </li>
                                    <li>
                                        <div class="InputArea">
                                            <ul class="Form FancyForm">
                                                <li class="noMarginBottom ">
                                                    <textarea  class="DescriptionTextarea" name="pin_desc" style="color:#C9C8C8; resize: none;" id="pin_desc" row="3" onFocus="onFocusMenu(this,'Please Enter Description');" onBlur="onBlurEvent(this,'Please Enter Description');" >Please Enter Description</textarea>
                                                    </li>
                                            </ul>
                                        </div>
                                        <div id="pinError"></div>
                                    </li>
                                    <li>
                                        <input type="submit" onclick ="return validatePin()" value="Pin It" name="uploadPin" id="uploadPin"/>
                                    </li>
                                    <div class="clear"></div>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
        <!-- End of Upload the Pin--> 

        <!-- To Create the Board -->
        <div id="CreateBoard" class="ModalContainer">
            <div class="modal wide" style="margin-bottom: -80px !important;">
                <div class="header lg"> <a href="#" class="close" onclick="javascript:document.getElementById('boardnameerror').innerHTML = '';document.getElementById('contributer').style.display = 'none';document.getElementById('menuSearchVal').style.display = 'none' ;document.getElementById('contributers_name_addboard').value = '';AddDialog.childClose('Add','CreateBoard'); return false"><strong>Close</strong><span></span></a>
                    <h2>Create a Board</h2>
                </div>
                <form action="" method="post" class="Form StaticForm noMargin">
                    <ul>
                        <li class="noBorderTop">
                            <label>Board Name</label>
                            <div class="floatright" style="width: 370px;">
                                <input id="board_name" type="text" name="board_name"  style="width: 370px;"/>
                                <div class="clear"></div>
                                <div id="boardnameerror"></div>
                                <span class="fff"></span> </div>
                        </li>
                        <li>
                            <input id="board_description" type="hidden" name="board_description" value="" />
                            <input id="created_date" type="hidden" name="created_date" value="2013-02-11 06:38:06" />
                            <div class="BoardListOverlay"></div>
                            <div id="CategoryPicker" class="BoardSelector BoardPickerselect">
                                <select name="board_category_id" id="board_category_id" class="customStyleSelectBox">
                                            <option class="BoardCategory" value=" 1"> Arts</option>
                                                                            <option class="BoardCategory" value=" 4"> Drinks</option>
                                                                            <option class="BoardCategory" value=" 2"> Education</option>
                                                                            <option class="BoardCategory" value=" 3"> Food</option>
                                                                            <option class="BoardCategory" value=" 5"> Hair and Beauty</option>
                                                                    </select>
                            </div>
                            <label>Board Category</label>
                            <div id="categorynameerror"></div>
                        </li>
                        <li>
                            <label class="radio">Who can pin?</label>
                            <div class="Right" style="float: right;">
                                <div style="display:none; border-top: 0;"></div>
                                <ul class="pinability">
                                    <li>
                                        <label>
                                            <input type="radio" name="board_access" value="0" checked="checked" onclick="contributersoff();" />
                                            <span>Just Me</span> </label>
                                    </li>
                                    <li class="last-child">
                                        <label>
                                            <input type="radio" name="board_access" value="1" onclick="contributers();"/>
                                            <span> Me + Contributors </span> </label>
                                    </li>
                                </ul>
                                    <div style="clear:  both;"></div>
                                        <div id="contributer" style="display: none;  float: right; margin: 10px 0 0; overflow: hidden;">
                                            <input type="text" name="contributers_name_addboard" id="contributers_name_addboard" autocomplete="off" style="color: #999; margin-bottom:0px; float: left ; width: 280px; height: 35px;" value="Name or Email Address" onkeyup="showResult(this.value);" onFocus="onFocusEvent(this,'Name or Email Address');" onBlur="onBlurEvent(this,'Name or Email Address');"   />
                                            <a  name="add_board_contributers" id="add_board_contributers" class="add_btn" onclick="userContributers();"  style="float:right; margin: 0px 0 0 10px; padding: 5px 23px;cursor:pointer;"> Add </a>
                                        </div>
                                        <div class="clear"></div>
                                        <div id="SearchVal">
                                            <ul id="menuSearchVal" class="static-form" style="display:none;">
                                            </ul>
                                        </div>
                                        <div id="loadingImage" style="display:none;"> <img src="http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu/images/loading.gif" width="20" height="20" alt="" /> </div>
                                    <div id="contributer_name"> </div>
                            </div>
                        </li>
                    </ul>
                    <div >
                        <input type="submit" onclick="return validateBoard();" name="btnBoard" id="btnBoard"  class="create_board" value="Create Board" />
                        <input type="hidden" name="id_contributers" id="id_contributers" value="" />
                    </div>
                    <div class="CreateBoardStatus error"></div>
                </form>
            </div>
            <div class="overlay"></div>
        </div>
        <!-- Repin contnet starts here -->
        <div id="Repin" class="ModalContainer">
            <div class="modal wide PostSetup" style="margin-bottom: -138px; ">
                <div id="postsetup">
                    <div class="header lg">
                        <h2>Repin</h2>
                        <a href="#" class="close-btn" onclick=" document.getElementById('descriptionerror').innerHTML='';document.getElementById('Header').style.zIndex = 999;Modal.close('Repin'); return false"></a> </div>
                    <div class="ImagePicker">
                        <div class="Images" id="imagepin"><img src="/extensions/socialpinboard/" name="pinImage" id="pinImage"></div>
                    </div>
                    <div class="PinForm">
                        <select name="repin_board" id="repin_board">
                                                            <option class="BoardCategory " value=" 305" >  Me and Me </option>
                                <option class="BoardCategory " value=" 306" >  Favorite Places & Spaces </option>
                                <option class="BoardCategory " value=" 307" >  Books Worth Reading </option>
                                <option class="BoardCategory " value=" 308" >  My Style </option>
                                <option class="BoardCategory " value=" 309" >  For the Home </option>
                        </select>
                        <input type="hidden" name="board_selection" id="board_selection" value="309"/>
                        <div class="uploadtext">
                            <input type="text" name="boardtxt" id="boardtxt" value=""/>
                        </div>
                        <div class="special"><a href="javascript:void(0);" class="creat_bttn" onclick="addrepinmenuboard(863)" style="display:block">
     Create
                            </a></div>
                        <div id="boardError"></div>
                        <div class="repin-text InputArea" style="float: left;width: 350px;">
                            <ul class="Form FancyForm">
                                <li class="noMarginBottom  val">
                                    <textarea class="DescriptionTextarea" id="DescriptionTextarea" rows="2" data-text-error-empty="Please enter a description." name="caption"></textarea>
                                    <div class="tagmate-menu" style="position: absolute; display: none; "></div>
                                    <span class="fff"></span> </li>
                            </ul>
                            <span id="descriptionerror"></span>
                            <input type="hidden" id="currencyvalue" value="$">
                            <input type="hidden" name="pin_type_id" id="pin_type_id" value=""/>
                            <input type="hidden" name="pin_repin_id" id="pin_repin_id" value=""/>
                            <input type="hidden" name="pin_real_pin_id" id="pin_real_pin_id" value=""/>
                            <input type="hidden" name="pin_url" id="pin_url" value=""/>
                            <input type="hidden" name="pin_user_id" id="pin_user_id" value="863"/>
                        </div>
                        <div class="CreateBoardStatus error mainerror" id="CreateBoardStatus"> </div>
                        <div class="Buttons" style="clear:both;">
                            <input type="button" id="uploadPin" onclick="return ajxGetBoards('http://www.apptha-demo.com/extensions/socialpinboard/');" value=" Pin It"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
            <div id="PostSuccess" class="modal wide PostSuccess" style="display:none;margin-bottom: -138px;margin-top:225px;text-align: center;overflow: hidden; font-size: 20px;">
                <div class="header lg" style="text-align: left;">
                    <h2><a href="#" class="close" onclick="document.getElementById('Header').style.zIndex = 3;RepinDialog.reset(); return false"><strong>Close</strong><span></span></a>Repin</h2>
                </div>
    Repinning... Please Wait... <span><a href="#" class="BoardLink" id="boardLink"></a></span>. </div>
        </div>
        <script type="text/javascript">
            var currencyvalue = document.getElementById("currencyvalue").value;

            var scr = jQuery.noConflict();  scr(document).ready(function($){
        
                ScrapePinDialog.setup();
                UploadPinDialog.setup();
                CreateBoardDialog.setup();
                RepinDialog.setup();
                FancyForm.setup();
            });
        </script> 
        <!-- Repin contenet ends here --> 
        <script type="text/javascript">

            function changeselected(obj)
            {
        
                var strUser = obj.options[obj.selectedIndex].value;
      
                document.getElementById('board_selection').value = strUser;
            }
            function contributers()
            {
                document.getElementById('contributer').style.display="block";
            }
            function contributersoff()
            {
                document.getElementById('contributer').style.display="none";
            }
           function showResult(str)
            {
                
                if(str!= "")
                    {
                str = jQuery.trim(str);
               
                if (window.XMLHttpRequest)
                {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                  
                }
                else
                {// code for IE6, IE5
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    
                }
                xmlhttp.onreadystatechange=function()
                {
                    if (xmlhttp.readyState==4 && xmlhttp.status==200)
                    {
                        
                        if(xmlhttp.responseText.length == 0)
                        {  document.getElementById("menuSearchVal").innerHTML="";
                            document.getElementById("menuSearchVal").style.display="none";
                            document.getElementById("loadingImage").style.display="none";

                        }
                        else{
                            document.getElementById("loadingImage").style.display="none";
                            document.getElementById("menuSearchVal").style.display="block";
                            

                            var searchValue=xmlhttp.responseText;
                            
                            //alert(searchValue.length);
                             var b='';
                            if(searchValue !='""'){

                            var obj = jQuery.parseJSON(searchValue);
                            if(searchValue==',')
                            {
                                document.getElementById("menuSearchVal").style.display='none';
                                return false;

                            }
                            var nameArray = obj.username;
                            var idArray=obj.userid

                           
                            for(var i=0;i< nameArray.length;i++)
                            {
                                b+='<li id="static_li" style="padding-left:5px;" onclick="userSelectBoard(\''+nameArray[i]+'\',\''+idArray[i]+'\')" >'+nameArray[i]+'</li>';
                            }
                            document.getElementById("contributer_name").innerHTML = '';
                            document.getElementById("menuSearchVal").innerHTML=b;
                            }
                            else{
                                document.getElementById("menuSearchVal").innerHTML = '';
                                document.getElementById("menuSearchVal").innerHTML ='No users found';
                            }
                           
                        }

                    }
                }
                var url = "?option=com_socialpinboard&view=ajaxcontrol&tmpl=component&task=getcontributers&user="+str;
                xmlhttp.open("GET",url,true);
                xmlhttp.send();
                    }
                    else{
                     document.getElementById("menuSearchVal").style.display= "none";
                    }
            }
        
            function userSelectBoard(userCon)
            {
                document.getElementById('contributers_name_addboard').value=userCon;
         
            }

        </script> 
        <script type="text/javascript" >
            scr(function(){
                var btnUpload=scr('#me');
                var mestatus=scr('#mestatus');
                var files=scr('#files');
                new AjaxUpload(btnUpload, {
                    action: 'http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu/saveimagefromupload.php',
                    name: 'uploadfile',
                    onSubmit: function(file, ext){
                        if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){ 
                            // extension is not allowed 
                            mestatus.text('Only JPG, PNG or GIF files are allowed');
                            return false;
                        }
                        mestatus.html('');
                    },
                    onComplete: function(file, response){
                        //On completion clear the status
                        //mestatus.text('Image Uploaded Sucessfully!');
                        //On completion clear the status
                        files.html('');
                        //Add uploaded file to list
                        if(response!=""){
                            document.getElementById('upload_img_popup').src = 'http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu//images/socialpinboard/temp/'+response;
                            document.getElementById('upload_image_popup').style.display="block";
                            document.getElementById('upload_pin').style.display="block";
                            document.getElementById('pricetags').style.display="block";
                            document.getElementById('image_id').value = response;
                        } 
                    }
                });
    		
            });
            
            function ajxGetBoards(baseurl){

                var xhr = getXhr();
                var board=document.getElementById('repin_board').value;
                if(board=='')
                {
              
                    document.getElementById('descriptionerror').innerHTML='<label style="color:red">Please Select A Board </label>';
                    return false;
                }
                var descriptions = document.getElementById('DescriptionTextarea').value;
                var a = document.getElementById('boardLink');
                a.href = baseurl+"?option=com_socialpinboard&view=boardpage&bId="+board;
                //    var selectedindex=document.getElementById('board_selection').selectedIndex;
                // a.textContent = document.getElementById('one-ddheader').innerHTML;
        
                if(descriptions=='')
                {
                    document.getElementById('descriptionerror').innerHTML='<label style="color:red">Please enter description</label>';
                    return false;
                }
                var pin_repin_id = document.getElementById('pin_repin_id').value;
                var pin_real_pin_id=document.getElementById('pin_real_pin_id').value;
                var pin_user_id=document.getElementById('pin_user_id').value;


                if (pin_user_id!=0)
                {
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4){
                            try
                            {
                                var options = xhr.responseText;
                                // var a = document.getElementById('PinLink');
                                // a.href = baseurl+"?option=com_socialpinboard&view=pin&pinid="+options;

                                if(options)
                                {
                                    var span;
                                    var count = 0
                                       
                                    if(isNaN(scr("#repincountspan"+pin_repin_id).text())){

                                        count =parseInt(scr("#repincountspan"+pin_repin_id).text().substring(0,scr("#repincountspan"+pin_repin_id).text().indexOf(" ")))+1;
                                        span = count+" Repins ";
                                    }else{
                                        span= "1 Repin ";
                                    }
                                    scr("#repincountspan"+pin_repin_id).text(span);
                            
                                    RepinDialog.append();
                                }
                            }
                            catch(e) {
                                alert(e.message)
                            }
                        }
                    }

                    var url = baseurl+'index.php?board_id='+board+'&description='+descriptions+'&repin_id='+pin_repin_id+'&real_pin_id='+pin_real_pin_id+'&pin_user_id='+pin_user_id;
            
                    xhr.open("GET",url,true);
                    xhr.send(null);
                }

            }

            
            
        </script>
    </div>
<script type="text/javascript">
        function validateBoard(){

            var boardtitle = document.getElementById('board_name').value;
            var categorytitle = document.getElementById('board_category_id').value;
            document.getElementById('categorynameerror').innerHTML='';
            document.getElementById('boardnameerror').innerHTML='';
            if(categorytitle == '0' ||categorytitle == '' ){
                document.getElementById('categorynameerror').innerHTML='<label style="color:red; margin-left: 180px;">Please Select a Category</label>';
                return false;
            }

            if(boardtitle == ''){
                document.getElementById('boardnameerror').innerHTML='<label style="color: red; font-size:12px; width:auto; font-weight:bold; float: left;">Please Enter the Board Name</label>';
                return false;
            }
        }

        function validatePin(){
    
      
            var boardName = document.getElementById('upload_board').value;
            var pinDesc = document.getElementById('pin_desc').value;
       
            if(boardName == '' || boardName=='0'){
                alert("ok");

                document.getElementById('boardError').innerHTML='<label id="login_error_msg" style="clear: both; margin: 0 0 0 1px; ">Please Enter the Board Name</label>';
                return false;
            }
       
            if(pinDesc == '' || pinDesc == 'Please Enter Description'){
                document.getElementById('pinError').innerHTML='<label id="login_error_msg" style="margin: 10px 0 0 -128px;display: block;clear: both;">Please Enter the Description</label>';
                return false;
            }
            document.getElementById('uploadPin').style.display='none';
            document.getElementById('addpinloader').style.display='block';
        
        }
        

        function validateImageUrl()
        {
           
    
            var desc = document.getElementById('txtpin').value;
            var str = document.getElementById('srcimg').value;
            if(str=='')
            {
                document.getElementById('addpinerror').innerHTML='<label id="login_error_msg" style="margin: 10px 0 0 22px;display: block;clear: both;">Image not exist</label>';
                return false;
            }
                   
                  
            if(desc == ''|| desc=='Please Enter Description'){
                document.getElementById('addpinerror').innerHTML='<label id="login_error_msg" style="padding: 0px;display: block;clear: both;position: relative;margin: 0;text-align: left;">Please Enter the Description</label>';
                return false;
            }
             document.getElementById('add_pin').style.display="none";
            document.getElementById('add_pining').style.display="block";
        }
    </script>
    <script type="text/javascript">
                        function loadXMLDoc()
                        {
                             var url;
                            var content;   
                            var filename = document.getElementById('ScrapePinInput').value;
                            if( filename.indexOf('http://') !== 0  && filename.indexOf('https://') !== 0){ 
        filename = 'http://' + filename;
    }
    
                            document.getElementById('imgcnt').value=0;
                            if(filename == ''){
                                alert('Please Enter Valid Url');
                                return false;
                            }else if (!isUrl(filename))
                            {
                                alert("Please Enter Valid Url");
                                return false;
                            }
							document.getElementById('ScrapeButton').style.display="none";
                             document.getElementById('ScrapeButton1').style.display="block";
                           
							
                            var matches = filename.match(/watch\?v=([a-zA-Z0-9\-_]+)/); //check for the youtube
                            var valid_extensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;   //regular expression for images
                            if(valid_extensions.test(filename)) //check the extensions available in the url
                            { 
                                
                                content = '<img id="imgsrc0" src="'+filename+'" />,'; // if available bind the image url with the src tag
                                
                                bindimage(content);
                                              
                            }
                            else if(matches) // if the url is the youtube
                            {
                                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/; //regular expression for youtube
                                var match = filename.match(regExp);  // get the array value of the url
                                if (match&&match[7].length==11){
                                    youtubeId =  match[7];
                                    content = '<input type="hidden" name="type" id="type" value="youtube"/>';
                                    content += '<img id="youtubeimg" src="http://img.youtube.com/vi/' +youtubeId+'/0.jpg" width="198" height="150"/>';
                                    content += '<input type="hidden" name="youtube_image" id="youtube_image" value="http://img.youtube.com/vi/' +youtubeId+ '/0.jpg"/>';
                                    bindimage(content);	
                                }
    						
                            }
                            else if (filename.indexOf('vimeo.com') > -1) {  //Checks for the vimeo condition
                                id = filename.match(/http:\/\/(?:www.)?(\w*).com\/(\d*)/)[2];
                                scr.ajax({
                                    url: 'http://vimeo.com/api/v2/video/' + id + '.json',
                                    dataType: 'jsonp',
                                    success: function(data) {
    									
                                        content = '<input type="hidden" name="type" id="type" value="vimeo"/>';
                                        content += '<img id="youtubeimg" src="' +data[0].thumbnail_large+'" width="198" height="150"/>';
                                        content += '<input type="hidden" name="youtube_image" id="youtube_image" value="' +data[0].thumbnail_large+ '"/>';
                                        bindimage(content);					
                                    }
                                });
                            }
                            else
                            {
                                url = filename;
                                
                                content = ajaxinclude(url);
    					
                            }
                        
                        }
    		
    		
                        function ajaxinclude(url) 
                        {
                            if (window.XMLHttpRequest)
                            {// code for IE7+, Firefox, Chrome, Opera, Safari
                                xmlhttp=new XMLHttpRequest();
                            }
                            else
                            {// code for IE6, IE5
                                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                            }
                            xmlhttp.onreadystatechange=function()
                            {   
                                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                                {
                                    bindimage(xmlhttp.responseText);
                                }

                            }
                            var strval=url.split('').reverse().join('');
                            
                            var pageurl = 'http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu/saveimagefromurl.php?url='+strval;
                            
                            xmlhttp.open("GET",pageurl,true);

                            xmlhttp.send();
                        } 
                  
                        function bindimage(content)
                        {
                            var Images = content.split(',');
                            document.getElementById("getImg").innerHTML='';
                            for(var i=0;i<Images.length;i++){
                                document.getElementById("getImg").innerHTML += Images[i];
                                if(document.getElementById("youtubeimg"))
                                    document.getElementById("srcimg").value = document.getElementById("youtubeimg").src;
                                document.getElementById('urlImages').style.display='block';
                                document.getElementById('ScrapeButton1').style.display = "none";
                                document.getElementById('ScrapeButton').style.display = "block";
                                if(i == 0){
    									
                                    if(document.getElementById("imgsrc"+i))
                                        document.getElementById("imgsrc"+i).style.display='block';
                                    document.getElementById('urlImages').style.display='block';
                                    if(document.getElementById("imgsrc"+i))
                                        document.getElementById('srcimg').value = document.getElementById("imgsrc"+i).src;
                                }
                                else
                                {
                                    document.getElementById("imgsrc"+i).style.display='none';

                                }
                            }
                        }
                        //validate url
                        function isUrl(s) {
                            var regexp = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/;
                            return regexp.test(s);
                        }

                    </script> 
                    <script type="text/javascript">
                        function nextPrev(type){
                            var imgcount = document.getElementById('imgcnt').value;
                            var orig = imgcount;
                            if(type == 'prev'){
                                imgcount--;
                            }
                            else if(type == 'next'){
                                imgcount++;
                            }
                         
                            if( document.getElementById("imgsrc"+imgcount))
                            {
                                document.getElementById("imgsrc"+orig).style.display='none';
                                document.getElementById('imgcnt').value = imgcount;
                                document.getElementById("imgsrc"+imgcount).style.display='block';
                                document.getElementById('srcimg').value = document.getElementById("imgsrc"+imgcount).src;
                        
                            }

                        }
                       function addPinclose()
                        {
                            
                            document.getElementById('urlImages').style.display = 'none';
                            document.getElementById('ScrapePinInput').value = '';
                            document.getElementById('boardErrorpin').innerHTML = '';
                            AddDialog.childClose('Add','ScrapePin'); 
                            document.getElementById('ScrapeButton1').style.display = 'none'; 
                            document.getElementById('ScrapeButton').style.display = 'block'; 
                            return false;
                            
                        }

                </script>
<script>
var Modal=Modal||{
    setup:function(){
        $(document).keydown(function(a){
            if(a.keyCode==27){
                var c=$(".ModalContainer:visible").attr("id");
                if(c)Modal.close(c);else $("#zoomScroll").length&&window.History.back();
                a.preventDefault()
                }
            })
    },
show:function(a){
    if(a=='EmailModal')
        {
            document.getElementById('MessageRecipientName').value='';
            document.getElementById('MessageRecipientEmail').value='';
            document.getElementById('MessageBody').value='';
            document.getElementById('output').innerHTML='';
        }
    var c=scr("#"+a);
    a=scr(".modal:first",c);
	if(scr('body').hasClass('noscrollf'))
	{
	}
	else
	{
    scr("body").addClass("noscroll");
	}
    c.show();
    var d=a.outerHeight()-50;
    a.css("margin-bottom","-"+d/2+"px");
    setTimeout(function(){
        c.addClass("visible");
        c.css("-webkit-transform","none")
        },1);
    return false
    },
close:function(a){
    var c=
    scr("#"+a);
    scr("#zoomScroll").length===0&&scr("body").removeClass("noscroll");
    c.removeClass("visible");
    setTimeout(function(){
        c.hide();
        c.css("-webkit-transform","translateZ(0)")
        },251);
    return false
    }
};

var RepinDialog=RepinDialog||{
    setup:function(){

        var a=scr("#Repin"),c=scr("form",a),d=scr(".Buttons .Button",a),f=scr("strong",d),g=scr(".DescriptionTextarea",a),b=scr(".mainerror",a);




            Tagging.initTextarea("#DescriptionTextarea");
            Tagging.priceTag("#DescriptionTextarea","#imagepin");
            scr("#Repin").submit(function(){
                Tagging.loadTags("#DescriptionTextarea","#id_pin_replies","#pin_tags","#id_buyable")
                });
            scr("#DescriptionTextarea").keyup(function(){
                scr("#postDescription").html(scr(this).val())
                })



        AddDialog.shareCheckboxes("Repin");




},
grid:function(){
    $(".repin_link").live("click",function(){

        pinID=$(this).parents(".pin").attr("data-id");
        RepinDialog.show(pinID);
        return false
        })
    },
show:function(a){


    },
reset:function(){
    document.getElementById('Header').style.zIndex = 7;
    var a=scr("#Repin");
    Modal.close("Repin");
    a.removeClass("visible").removeClass("super");
    scr(".PostSuccess",a).hide();
    scr("form",a).attr("action","");
    scr(".DescriptionTextarea",a).val("");
    scr(".ImagePicker .Images",a).html("");
    scr(".price",a).removeClass("visible").html("");
    scr(".mainerror",a).html("");
    scr(".Buttons .RedButton",a).removeClass("disabled");
    scr(".Buttons .RedButton strong",a).html("Pin It");
    scr("#repin_pin_id",a).val("")
    },
    append:function()
    {

var a=scr("#Repin");
//                        trackGAEvent("repin_submit","success","dialogue");
                        var h=scr("#PostSuccess");

                        h.show();
                        setTimeout(function(){
                            a.addClass("super")
                            },1);
                        setTimeout(function(){
                            RepinDialog.reset()
                            },2500);

    }
};
var BoardPicker=function(){
    return{
        setup:function(a,c,d){
            a=scr(a);
            var f=scr(".BoardListOverlay",a.parent()),g=scr(".BoardList",a),b=scr(".CurrentBoard",a),e=scr("ul",g);
            a.click(function(){
                g.show();
                f.show()
                });
            f.click(function(){
                g.hide();
                f.hide()
                });
            scr("li",e).live("click",function(){
                b.text(scr(this).text());
                f.hide();
                g.hide();
                c&&c(scr(this).attr("data"));
                return false
                });
            a=scr(".CreateBoard",g);
            var h=scr("input",a),k=scr(".Button",a);
            scr("strong",k);
            var l=scr(".CreateBoardStatus",a);

            k.click(function(){
                if(k.attr("disabled")==
                    "disabled")return false;
                if(h.val()=="Create New Board"){
                    l.html("Enter a board name").css("color","red").show();
                    return false
                    }
                    l.html("").hide();
                k.addClass("disabled").attr("disabled","disabled");

            return false
            })
        }
    }
}();
var AddDialog=function(){
    return{
        setup:function(a){
            var c="#"+a,d=scr(c);
            BoardPicker.setup(c+" .BoardPicker",function(f){
                scr(c+" #id_board").val(f)
                },function(f){
                scr(c+" #id_board").val(f)
                });
            AddDialog.shareCheckboxes(a);
            Tagging.initTextarea(c+" .DescriptionTextarea");
            Tagging.priceTag(c+" .DescriptionTextarea",c+" .ImagePicker");

    },
reset:function(a){
    a==="CreateBoard"&&CreateBoardDialog.reset();
    a==="ScrapePin"&&ScrapePinDialog.reset();
    a==="UploadPin"&&UploadPinDialog.reset();
    AddDialog._resets[a]&&AddDialog._resets[a]()
    },
close:function(a,c){
    scr("#"+a).addClass("super");
    Modal.show(c)
    },
childClose:function(a,
    c){
    var d=this,f=scr("#"+c);
    scr(".ModalContainer",f);

    //d.reset(c);

    scr("#"+a).removeClass("super");

    Modal.close(a);
    Modal.close(c)
    },
pinBottom:function(a){
    var c=scr("#"+a);
    scr(".PinBottom",c).slideDown(300,function(){
        var d=scr(".modal:first",c);
        d.css("margin-bottom","-"+d.outerHeight()/2+"px")
        })
    },
shareCheckboxes:function(a){
    function c(g){
        var b=scr("#"+a+" .publish_to_"+g),e=scr("#"+a+" #id_publish_to_"+g);
        b.change(function(){
            if(b.is(":checked")){
                e.attr("checked","checked");
                b.parent().addClass("active")
                }else{
                e.removeAttr("checked");
                b.parent().removeClass("active")
                }
            });
    var h=b.is(":checked");
    return function(){
        if(h){
            b.parent().addClass("active");
            b.attr("checked","checked")
            }else{
            b.parent().removeClass("active");
            b.removeAttr("checked")
            }
        }
}
var d=c("facebook"),f=c("twitter");
AddDialog._resets=AddDialog._resets||{};

AddDialog._resets[a]=function(){
    d();
    f()
    }
}
}
}();
var EditPin=function(){
    return{

        setup:function(){

            Tagging.initTextarea("#description_pin_edit");
            Tagging.priceTag("#description_pin_edit","#PinEditPreview");
            scr("#PinEdit").submit(function(){
                Tagging.loadTags("#description_pin_edit","#id_pin_replies","#pin_tags","#id_buyable")
                });
            scr("#description_pin_edit").keyup(function(){
                scr("#postDescription").html(scr(this).val())
                })
            }
        }
}();




var CreateBoardDialog=function(){
    return{
        setup:function(){
            function a(){
                if(!g){
                    g=true;
                    Tagging.initInput("#CreateBoard #collaborator_name",function(b){
                        f=b
                        },function(){
                        $("#CreateBoard #submit_collaborator").click()
                        })
                    }
                }
            function c(){
            var b=[];
            $("#CurrentCollaborators .Collaborator",d).each(function(){
                b.push($(this).attr("username"))
                });
            return b
            }
            var d=scr("#CreateBoard"),f=null,g=false;


BoardPicker.setup("#CreateBoard .BoardPicker",function(b){
    $("#id_category",d).val(b)
    });
scr("#BoardName",d).keyup(function(){
    scr(".board_name.error",
        d).html()!==""&&scr(".board_name.error",d).html("")
    });
scr(".Submit .Button",d).click(function(){

    if(scr("#BoardName",d).val()=="Board Name"||$("#BoardName",d).val()==""){
        scr(".board_name.error",d).html("Please enter a board name").show();
        return false
        }
        if(!scr("#id_category",d).val()){
        scr(".board_category.error",d).html("Please select a category").show();
        return false
        }
        var b=scr(".Submit .Button",d),e=b.children("strong");
    b.attr("disabled","disabled").addClass("disabled");
    e.html("Creating &hellip;");

return false
})
},
reset:function(){
    $("#BoardName").val("");
    $("input[value='me']").attr("checked",true);
    $("#CurrentCollaborators").empty()
    }
}
}();



var CropImage=function(){
    this.initialize.apply(this,arguments)
    };
    var BoardCoverSelector=function(){
    this.initialize.apply(this,arguments)
    };
    var Tagging=function(){
    return{
        friends:null,
        friendsLinks:{},
        getFriends:function(a,c,d){
            var e=a.term;
            (function(f){
                Tagging.friends?f():$.get("/x2ns4tdf0cd7cc9b/_getfriends/",function(b){
                    Tagging.friends=[];
                    $.each(b,function(g,h){
                        Tagging.friends.push({
                            label:h.name,
                            value:h.username,
                            image:h.image,
                            link:"/"+h.username+"/",
                            category:"People"
                        });
                        Tagging.friendsLinks["/"+h.username+"/"]=1
                        });
                    f()
                    })
                })(function(){
                var f=[];
                if(d)for(name in d)Tagging.friendsLinks[name]||!d.hasOwnProperty(name)||f.push(d[name]);f=f.concat(Tagging.friends);
                if(e)f=tagmate.filter_options(f,e);
                c(f)
                })
            },
        initInput:function(a,c,d){
            a=$(a);
            var e=$("<div class='CollabAutocompleteHolder'></div>");
            a.after(e);
            a.autocomplete({
                source:Tagging.getFriends,
                minLength:1,
                delay:5,
                appendTo:e,
                change:function(f,b){
                    c&&c(b.item)
                    },
                select:function(f,b){
                    c&&c(b.item);
                    return false
                    },
                position:{
                    my:"left top",
                    at:"left bottom",
                    offset:"0 -1"
                }
            }).keydown(function(f){
            f.which==13&&d&&d()
            });

        },
initTextarea:function(a,c){
    a=scr(a);
    var d={};

    d["@"]=tagmate.USER_TAG_EXPR;
    d["#"]=tagmate.HASH_TAG_EXPR;
    d.$=tagmate.USD_TAG_EXPR;
    d["\u00a3"]=tagmate.GBP_TAG_EXPR;
    a.tagmate({
        tagchars:d,
        sources:{
            "@":function(e,f){
                Tagging.getFriends(e,f,c)
                }
            }
    })
},
loadTags:function(a,c,d,e){
    a=$(a).getTags();
    for(var f=[],b=[],g=null,h=0;h<a.length;h++){
        a[h][0]==
        "@"&&f.push(a[h].substr(1));
        a[h][0]=="#"&&b.push(a[h].substr(1));
        if(a[h][0]=="$"||a[h][0]=="\u00a3")g=a[h]
            }
            $(c).val(f.join(","));
    $(d).val(b.join(","));
    $(e).val(g)
    },
priceTag:function(a,c){

    function d(){
        var e=scr(".price",c);
        if(e.length<=0){
            e=scr("<div class='price'></div>");
            c.prepend(e)
            }
            var f=a.getTags({
            $:tagmate.USD_TAG_EXPR,
            "\u00a3":tagmate.GBP_TAG_EXPR
            });
        if(f&&f.length>0){
            e.text(f[f.length-1]);
            e.addClass("visible");
            }else{
            e.removeClass("visible");
            e.text("")
            }
        }
    a=scr(a);
c=scr(c);
a.unbind(".priceTag").bind("keyup.priceTag",
    d).bind("focus.priceTag",d).bind("change.priceTag",d);
d()
}
}
}();
var ScrapePinDialog=ScrapePinDialog||{
    id:"ScrapePin",
    setup:function(){
        var a=this;
        AddDialog.setup(a.id);
        a.initScraperInput()
        },
    initScraperInput:function(){
        function a(j){
            return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(j)
            }
            function c(j){
            var k=true;
            if(j.indexOf("http")!=0)j="http://"+j;
            if(j=="")k=false;
            if(j=="http://")k=false;
            if(j.length<2)k=false;
            if(j.indexOf(".")==-1)k=false;
            a(j)||(k=false);
            return k
            }
            function d(){
            var j=scr("#"+ScrapePinDialog.id),k=scr("#ScrapePinInput").val();

            }
    function e(){
    if(images_count>0){
        images_count=
        -1;
        f()
        }
    }
function f(){
    strHtml="";
    imgFound=false;
    for(var j=foundCtr=0;j<imagesArray.length;j++){
        img=imagesArray[j];
        if(img.width>=150&&img.height>=50){
            imgFound=true;
            foundCtr++;
            strHtml+="<li>"+(is_video(img.src)?"<img src='"+media_url+"images/VideoIndicator.png' alt='Video Icon' class='video' />":"")+"<img src='"+img.src+"' width='156px' alt='' /></li>"
            }
        }
    if(strHtml!=""){
    $("#ScrapePin .ImagePicker .Images ul").html(strHtml);
    b(foundCtr)
    }else alert("No Large Images Found.")
    }
    function b(){
    var j=function(p,
        s){
        im=$(s).find("img")[0];
        if($(im).hasClass("video"))im=$(s).find("img")[1];
        src=$(im).attr("src");
        $("#id_img_url").val(src);
        $("#id_link").val($("#ScrapePinInput").val())
        },k=$("#ScrapePin .ImagePicker .Images").jcarousel({
        buttonNextHTML:null,
        buttonPrevHTML:null,
        initCallback:function(p){
            $("#ScrapePin .imagePickerNext").click(function(){
                p.next();
                return false
                });
            $("#ScrapePin .imagePickerPrevious").click(function(){
                p.prev();
                return false
                })
            },
        animation:"fast",
        itemVisibleInCallback:{
            onAfterAnimation:j
        },
        scroll:1
    });
    j(k,scr("#ScrapePin .ImagePicker").find("li")[0],1,"next")
    }
    function g(){
    var j=scr("#ScrapeButton");
    if(c(scr("#ScrapePinInput").val())){
        j.addClass("disabled");
        d()
        }else{
        alert("Please enter a valid website URL");
        j.removeClass("disabled")
        }
    }
var h="";
scr("#ScrapePinInput").bind("keydown",function(j){
    j.keyCode===13&&g()
    });
scr("#ScrapeButton").click(function(){
    g();
    return false
    })
},
reset:function(){
    var a=$("#"+this.id);
    $("#ScrapePinInput",a).val("");
    $(".PinBottom",a).hide();
    $(".modal",a).css("margin-bottom","0");
    $(".Buttons .Button",
        a).removeClass("disabled");
    $(".Buttons .Button strong",a).html("Pin It");
    ScrapePinDialog.initScraperInput()
    }
};
var UploadPinDialog=UploadPinDialog||{
    id:"UploadPin",
    setup:function(){
        var a=this,c=scr("#"+a.id);
        AddDialog.setup(a.id);

    },
reset:function(){
    var a=$("#"+this.id);
    $("input[type=file]",a).val("");
    $(".PinBottom",a).hide();
    $(".modal",a).css("margin-bottom","0");
    $(".Buttons .Button",a).removeClass("disabled");
    $(".Buttons .Button strong",a).html("Pin It")
    }
};
var FancyForm=function(){
    return{
        inputs:".Form input, .Form textarea",
        button:".SubmitButton",
        setup:function(){
            var a=this;
            this.inputs=scr(this.inputs);
            a.inputs.each(function(){
                var c=scr(this);
                a.checkVal(c)
                });
            a.inputs.live("keyup blur",function(){
                var c=scr(this);
                a.checkVal(c);
                var d=c.parents("ul"),e=c.parents(".Form").find(a.button);
                c.parents("li").hasClass("NoCheck")||a.checkDisabled(d,e)
                });
            scr(a.button).live("click",function(){
                var c=scr(this).attr("data-form");
                if(scr(this).hasClass("disabled"))return false;else scr("#"+
                    c+" form").submit()
                    })
            },
        checkVal:function(a){
            a.val().length>0?a.parent("li").addClass("val"):a.parent("li").removeClass("val")
            },
        checkDisabled:function(a,c){
            a.children("li:not(.optional)").length<=a.children("li.val").length?c.removeClass("disabled"):c.addClass("disabled")
            }
        }
}();
(function(){
    jQuery.each({
        getSelection:function(){
            var a=this.jquery?this[0]:this;
            return("selectionStart"in a&&function(){
                var c=a.selectionEnd-a.selectionStart;
                return{
                    start:a.selectionStart,
                    end:a.selectionEnd,
                    length:c,
                    text:a.value.substr(a.selectionStart,c)
                    }
                }||document.selection&&function(){
                a.focus();
                var c=document.selection.createRange();
                if(c==null)return{
                    start:0,
                    end:a.value.length,
                    length:0
                };

                var d=a.createTextRange(),e=d.duplicate();
                d.moveToBookmark(c.getBookmark());
                e.setEndPoint("EndToStart",d);
                var f=
                e.text.length,b=f;
                for(d=0;d<f;d++)e.text.charCodeAt(d)==13&&b--;
                f=e=c.text.length;
                for(d=0;d<e;d++)c.text.charCodeAt(d)==13&&f--;
                return{
                    start:b,
                    end:b+f,
                    length:f,
                    text:c.text
                    }
                }||function(){
            return{
                start:0,
                end:a.value.length,
                length:0
            }
        })()
    },
setSelection:function(a,c){
    var d=this.jquery?this[0]:this,e=a||0,f=c||0;
    return("selectionStart"in d&&function(){
        d.focus();
        d.selectionStart=e;
        d.selectionEnd=f;
        return this
        }||document.selection&&function(){
        d.focus();
        var b=d.createTextRange(),g=e;
        for(i=0;i<g;i++)if(d.value[i].search(/[\r\n]/)!=
            -1)e-=0.5;g=f;
        for(i=0;i<g;i++)if(d.value[i].search(/[\r\n]/)!=-1)f-=0.5;b.moveEnd("textedit",-1);
        b.moveStart("character",e);
        b.moveEnd("character",f-e);
        b.select();
        return this
        }||function(){
        return this
        })()
    },
replaceSelection:function(a){
    var c=this.jquery?this[0]:this,d=a||"";
    return("selectionStart"in c&&function(){
        c.value=c.value.substr(0,c.selectionStart)+d+c.value.substr(c.selectionEnd,c.value.length);
        return this
        }||document.selection&&function(){
        c.focus();
        document.selection.createRange().text=d;
        return this
        }||
    function(){
        c.value+=d;
        return this
        })()
    }
},function(a){
    jQuery.fn[a]=this
    })
})();

var tagmate=tagmate||{
    USER_TAG_EXPR:"@\\w+(?: \\w*)?",
    HASH_TAG_EXPR:"#\\w+",
    USD_TAG_EXPR:"\\"+currencyvalue+"(?:(?:\\d{1,3}(?:\\,\\d{3})+)|(?:\\d+))(?:\\.\\d{2})?"||"\\ð(?:(?:\\d{1,3}(?:\\,\\d{3})+)|(?:\\d+))(?:\\.\\d{2})?",

    filter_options:function(a,c){
        for(var d=[],e=0;e<a.length;e++){
            var f=a[e].label.toLowerCase(),b=c.toLowerCase();
            b.length<=f.length&&f.indexOf(b)==0&&d.push(a[e])
            }
            return d
        },
    sort_options:function(a){
        return a.sort(function(c,d){
            c=c.label.toLowerCase();
            d=d.label.toLowerCase();
            if(c>
                d)return 1;
            else if(c<d)return-1;
            return 0
            })
        }
    };
(function(a){
    function c(b,g,h){
        b=b.substring(h||0).search(g);
        return b>=0?b+(h||0):b
        }
        function d(b){
        return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
        }
        function e(b,g,h){
        var j={};

        for(tok in g)if(h&&h[tok]){
            var k={},p={};

            for(key in h[tok]){
                var s=h[tok][key].value,o=h[tok][key].label,l=d(tok+o),q=["(?:^(",")$|^(",")\\W|\\W(",")\\W|\\W(",")$)"].join(l),u=0;
                for(q=new RegExp(q,"gm");(u=c(b.val(),q,u))>-1;){
                    var v=p[u]?p[u]:null;

                    if(!v||k[v].length<o.length)p[u]=s;
                    k[s]=o;
                    u+=o.length+1
                    }
                }
                for(u in p)j[tok+p[u]]=
            tok
            }else{
            k=null;
            for(q=new RegExp("("+g[tok]+")","gm");k=q.exec(b.val());)j[k[1]]=tok
                }
                b=[];
    for(l in j)b.push(l);return b
    }
    var f={
    "@":tagmate.USER_TAG_EXPR,
    "#":tagmate.HASH_TAG_EXPR,
    $:tagmate.USD_TAG_EXPR,
    "\u00a3":tagmate.GBP_TAG_EXPR
    };

a.fn.extend({
    getTags:function(b,g){
        var h=a(this);
        b=b||h.data("_tagmate_tagchars");
        g=g||h.data("_tagmate_sources");
        return e(h,b,g)
        },
    tagmate:function(b){
        function g(o,l,q){
            for(l=new RegExp("["+l+"]");q>=0&&!l.test(o[q]);q--);
            return q
            }
            function h(o){
            var l=o.val(),q=o.getSelection(),
            u=-1;
            o=null;
            for(tok in s.tagchars){
                var v=g(l,tok,q.start);
                if(v>u){
                    u=v;
                    o=tok
                    }
                }
            l=l.substring(u+1,q.start);
        if((new RegExp("^"+s.tagchars[o])).exec(o+l))return o+l;
        return null
        }
        function j(o,l,q){
        var u=o.val(),v=o.getSelection();
        v=g(u,l[0],v.start);
        var z=u.substr(0,v);
        u=u.substr(v+l.length);
        o.val(z+l[0]+q+u);
        u=v+q.length+1;
        o.setSelection(u,u);
        s.replace_tag&&s.replace_tag(l,q)
        }
        function k(o,l){
        l=tagmate.sort_options(l);
        for(var q=0;q<l.length;q++){
            var u=l[q].label,v=l[q].image;
            q==0&&o.html("");
            var z="<span>"+
            u+"</span>";
            if(v)z="<img src='"+v+"' alt='"+u+"'/>"+z;
            u=s.menu_option_class;
            if(q==0)u+=" "+s.menu_option_active_class;
            o.append("<div class='"+u+"'>"+z+"</div>")
            }
        }
        function p(o,l){
    var q=l=="down"?":first-child":":last-child",u=l=="down"?"next":"prev";
    l=o.children("."+s.menu_option_active_class);
    if(l.length==0)l=o.children(q);
    else{
        l.removeClass(s.menu_option_active_class);
        l=l[u]().length>0?l[u]():l
        }
        l.addClass(s.menu_option_active_class);
    u=o.children();
    var v=Math.floor(a(o).height()/a(u[0]).height())-
    1;
    if(a(o).height()%a(u[0]).height()>0)v-=1;
    for(q=0;q<u.length&&a(u[q]).html()!=a(l).html();q++);
    q>v&&q-v>=0&&q-v<u.length&&o.scrollTo(u[q-v])
    }
    var s={
    tagchars:f,
    sources:null,
    capture_tag:null,
    replace_tag:null,
    menu:null,
    menu_class:"tagmate-menu",
    menu_option_class:"tagmate-menu-option",
    menu_option_active_class:"tagmate-menu-option-active"
};

return this.each(function(){
    function o(){
        v.hide();
        var B=h(l);
        if(B){
            var F=B[0],n=B.substr(1),m=l.getSelection(),y=g(l.val(),F,m.start);
            m.start-y<=B.length&&function(A){
                if(typeof s.sources[F]===
                    "object")A(tagmate.filter_options(s.sources[F],n));else typeof s.sources[F]==="function"?s.sources[F]({
                    term:n
                },A):A()
                    }(function(A){
                if(A&&A.length>0){
                    k(v,A);
                    v.css("top",l.outerHeight()-1+"px");
                    v.show();
                    for(var D=l.data("_tagmate_sources"),E=0;E<A.length;E++){
                        for(var K=false,L=0;!K&&L<D[F].length;L++)K=D[F][L].value==A[E].value;
                        K||D[F].push(A[E])
                        }
                    }
                    B&&s.capture_tag&&s.capture_tag(B)
                })
        }
    }
b&&a.extend(s,b);
    var l=a(this);
    l.data("_tagmate_tagchars",s.tagchars);
    var q={};

    for(var u in s.sources)q[u]=[];l.data("_tagmate_sources",
    q);
var v=s.menu;
if(!v){
    v=a("<div class='"+s.menu_class+"'></div>");
    l.after(v)
    }
    l.offset();
    v.css("position","absolute");
    v.hide();
    var z=false;
    a(l).unbind(".tagmate").bind("focus.tagmate",function(){
    o()
    }).bind("blur.tagmate",function(){
    setTimeout(function(){
        v.hide()
        },300)
    }).bind("click.tagmate",function(){
    o()
    }).bind("keydown.tagmate",function(B){
    if(v.is(":visible"))if(B.keyCode==40){
        p(v,"down");
        z=true;
        return false
        }else if(B.keyCode==38){
        p(v,"up");
        z=true;
        return false
        }else if(B.keyCode==13){
        B=v.children("."+
            s.menu_option_active_class).text();
        var F=h(l);
        if(F&&B){
            j(l,F,B);
            v.hide();
            z=true;
            return false
            }
        }else if(B.keyCode==27){
        v.hide();
        z=true;
        return false
        }
    }).bind("keyup.tagmate",function(){
    if(z){
        z=false;
        return true
        }
        o()
    });
a("."+s.menu_class+" ."+s.menu_option_class).die("click.tagmate").live("click.tagmate",function(){
    var B=a(this).text(),F=h(l);
    j(l,F,B);
    v.hide();
    z=true;
    return false
    })
})
}
})
})(jQuery);

</script>
               
                <div class="clear"></div>
                <div id="Search">
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
<form method="post" name="taskform" action="/extensions/socialpinboard/index.php/component/socialpinboard/search">
    <input type="text" name="serachVal" id="serachVal" value="Search"  onFocus="if(this.value == 'Search') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'Search'}" />
<!--    <input type="text" name="serachVal" id="serachVal" value="Search"  onFocus="if(this.value == JTEXT::_('MOD_SOCIALPINBOARD_SEARCH')) {this.value = '';}" onBlur="if (this.value == '') {this.value = JTEXT::_('MOD_SOCIALPINBOARD_SEARCH');}" />-->
    <input type="submit" name="search" id="search" value="" />   
</form>



             </div>
            </div>
        </div>
        <div id="CategoriesBar" class="clearfix">
            <form name="category_list" action="/extensions/socialpinboard/index.php/component/socialpinboard/home" method="post">
<ul class="catMenu HeaderContainer">
        
    <li>


        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/home?pinners=youfollow" class="nav">PINNERS YOU FOLLOW</a></li>
        <li class="submenu">
                
        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/home/all" class="nav about">
            Everything</a>

        <ul id="CategoriesDropdown">
           
            <li>
                <span class="SubmenuColumn">
                <a style="cursor: pointer" onclick="return getCategories(' 1','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Arts')">Arts</a>
                    
                <a style="cursor: pointer" onclick="return getCategories(' 4','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Drinks')">Drinks</a>
                    
                <a style="cursor: pointer" onclick="return getCategories(' 2','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Education')">Education</a>
                    </span><span class="SubmenuColumn">
                <a style="cursor: pointer" onclick="return getCategories(' 3','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Food')">Food</a>
                    
                <a style="cursor: pointer" onclick="return getCategories(' 5','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Hair+and+Beauty')">Hair and Beauty</a>
                    </span>                   <input type="hidden" value="5" id="cat_id" name="cat_id"/>
            </li>
        </ul>


    </li>

    <li>
        
        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/video" class=" ">Videos</a>
            </li>
    <li>
                      <a href="/extensions/socialpinboard/index.php/component/socialpinboard/popular" class="nav">Popular</a>
            </li>
    <li>
                 <a href="/extensions/socialpinboard/index.php/component/socialpinboard/gift" class="nav">Gifts</a>
            </li>


</ul>
</form>
    <a id="home_invite_frnds" href="/extensions/socialpinboard/index.php/component/socialpinboard/invitefriends">Invite Friends</a>
    <script type="text/javascript">
    function getCategories(cat_id,cat_name)
    {
        document.getElementById('cat_id').value=cat_id;
        document.category_list.submit();
        return true;
    }
    
    </script>


        </div>
        <!--        <div id="content_banner">
            
        </div>-->
              <div id="content_color">
            
        </div>
           <div id="wrapper" >
                <div id="ColumnContainer" >
                   <div id="login_error_msg">
                       
<div id="system-message-container">
</div>
                   </div>
                                               <script>var scr = jQuery.noConflict();</script>
<div id="container">
    
        <script language='javascript'>  
            function loaddefimages(Id)  
            {  
                document.getElementById(Id).src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/no_user.jpg";  
                
            }   
          
        	    
        </script> 


        <div class="pin">


            <div class="ProfileSidebar profileslider_user">
                <h1>Mike Vihuela</h1>




                <!-- ProfileImage-->

                <div class="ProfileImage">  
                                            <img src="http://www.apptha-demo.com/extensions/socialpinboard//images/socialpinboard/avatars/MikeVihuela863_o.jpg"  style="width: 15em;" />        
                        
                        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/profile" class="recent_activities_edit">
                        Edit Profile                        </a>
                            
                        <p class="profrile_grid" style="font-style:bold;"></p>
                        <p class="profrile_grid"></p>
                            <p style="text-align: left;text-decoration:underline;"><a href="http://" target="_blank"></a></p>
                </div>


                <!-- ProfileLinks-->
                <ul class="user-activity">

                    
                                        <div class="recent_activity_bg">
                                            </div>
                </ul>
            </div>
        </div>
                                                <div class="pin" id="pin_div_136">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/136" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/136.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(136,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv136" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn136">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(136,863,0),disablelike(136,863,0))" title="Like" id="like136" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(136,863,1),disableunlike(136,863,0))" title="Unlike" id="unlike136" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(136,863)"  title="Comment" id="comment136" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    #flag</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan136" >
                         
                    </span>
                    <span id="commentscountspan136" ></span>
                    <span id="repincountspan136" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_136" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/clinkcloud861.jpg" title="clinkcloud " 
                                 alt="clinkcloud " width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">Clinkcloud </a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/300">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv136">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment136" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent136"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(136,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_135">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/135" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/135.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(135,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv135" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn135">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(135,863,0),disablelike(135,863,0))" title="Like" id="like135" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(135,863,1),disableunlike(135,863,0))" title="Unlike" id="unlike135" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(135,863)"  title="Comment" id="comment135" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    testing ....................................................................................</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan135" >
                         
                    </span>
                    <span id="commentscountspan135" ></span>
                    <span id="repincountspan135" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_135" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/clinkcloud861.jpg" title="clinkcloud " 
                                 alt="clinkcloud " width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">Clinkcloud </a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/300">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv135">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment135" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent135"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(135,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_134">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/134" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/134" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/SwzSAzYbu2k/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(134,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv134" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn134">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(134,863,0),disablelike(134,863,0))" title="Like" id="like134" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(134,863,1),disableunlike(134,863,0))" title="Unlike" id="unlike134" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(134,863)"  title="Comment" id="comment134" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    Pow wow</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan134" >
                         
                    </span>
                    <span id="commentscountspan134" ></span>
                    <span id="repincountspan134" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_134" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/clinkcloud861.jpg" title="clinkcloud " 
                                 alt="clinkcloud " width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">Clinkcloud </a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/300">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv134">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment134" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent134"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(134,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_47">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/47" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/07-amazing-photographs-19081154.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(47,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv47" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn47">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(47,863,0),disablelike(47,863,0))" title="Like" id="like47" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(47,863,1),disableunlike(47,863,0))" title="Unlike" id="unlike47" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(47,863)"  title="Comment" id="comment47" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    Wow...</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan47" >
                        1 Like 
                    </span>
                    <span id="commentscountspan47" ></span>
                    <span id="repincountspan47" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_47" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/16">New</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv47">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment47" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent47"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(47,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_46">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/46" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/134632329717161390.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(46,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv46" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn46">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(46,863,0),disablelike(46,863,0))" title="Like" id="like46" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(46,863,1),disableunlike(46,863,0))" title="Unlike" id="unlike46" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(46,863)"  title="Comment" id="comment46" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    green way</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan46" >
                        3 Likes 
                    </span>
                    <span id="commentscountspan46" ></span>
                    <span id="repincountspan46" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_46" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/19">Favorite Places & Spaces</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv46">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment46" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent46"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(46,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_45">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/45" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/8E10262627556.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(45,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv45" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn45">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(45,863,0),disablelike(45,863,0))" title="Like" id="like45" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(45,863,1),disableunlike(45,863,0))" title="Unlike" id="unlike45" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(45,863)"  title="Comment" id="comment45" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    like one</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan45" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan45" ></span>
                    <span id="repincountspan45" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_45" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/29">Photo Models</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv45">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment45" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent45"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(45,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_43">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/43" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/43" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/SwzSAzYbu2k/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(43,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv43" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn43">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(43,863,0),disablelike(43,863,0))" title="Like" id="like43" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(43,863,1),disableunlike(43,863,0))" title="Unlike" id="unlike43" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(43,863)"  title="Comment" id="comment43" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    Pow wow</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan43" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan43" ></span>
                    <span id="repincountspan43" >1 Repin 
                    </span>
                    <i class="loading_grid" id="loading_grid_43" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/18">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv43">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment43" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent43"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(43,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_42">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/42" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/258745941061643828_sgucg6X8_b84.jpeg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(42,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv42" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn42">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(42,863,0),disablelike(42,863,0))" title="Like" id="like42" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(42,863,1),disableunlike(42,863,0))" title="Unlike" id="unlike42" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(42,863)"  title="Comment" id="comment42" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    a cool spot</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan42" >
                         
                    </span>
                    <span id="commentscountspan42" ></span>
                    <span id="repincountspan42" >1 Repin 
                    </span>
                    <i class="loading_grid" id="loading_grid_42" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/30">Nature</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv42">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment42" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent42"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(42,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_41">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/41" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/alex_emily_20_12122016.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(41,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv41" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn41">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(41,863,0),disablelike(41,863,0))" title="Like" id="like41" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(41,863,1),disableunlike(41,863,0))" title="Unlike" id="unlike41" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(41,863)"  title="Comment" id="comment41" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    awesome snap</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan41" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan41" ></span>
                    <span id="repincountspan41" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_41" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/18">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv41">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment41" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent41"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(41,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_40">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/40" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/hello-glam-shepard-photo-fb652.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(40,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv40" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn40">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(40,863,0),disablelike(40,863,0))" title="Like" id="like40" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(40,863,1),disableunlike(40,863,0))" title="Unlike" id="unlike40" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(40,863)"  title="Comment" id="comment40" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    yellow</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan40" >
                        3 Likes 
                    </span>
                    <span id="commentscountspan40" ></span>
                    <span id="repincountspan40" >1 Repin 
                    </span>
                    <i class="loading_grid" id="loading_grid_40" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv40">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment40" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent40"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(40,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_38">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/38" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/38.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(38,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv38" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn38">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(38,863,0),disablelike(38,863,0))" title="Like" id="like38" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(38,863,1),disableunlike(38,863,0))" title="Unlike" id="unlike38" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(38,863)"  title="Comment" id="comment38" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    fight with me</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan38" >
                        3 Likes 
                    </span>
                    <span id="commentscountspan38" ></span>
                    <span id="repincountspan38" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_38" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/23">Sports and Art</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv38">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment38" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent38"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(38,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_37">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/37" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/220887556694322445_WAADxuS5_b85.jpeg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(37,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv37" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn37">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(37,863,0),disablelike(37,863,0))" title="Like" id="like37" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(37,863,1),disableunlike(37,863,0))" title="Unlike" id="unlike37" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(37,863)"  title="Comment" id="comment37" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    The banks of Llyn Cregennen, near Dolgellau, Wales, United Kingdom</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan37" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan37" ></span>
                    <span id="repincountspan37" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_37" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/30">Nature</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv37">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment37" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent37"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(37,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_36">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/36" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/Most-amazing-and-dangerous-bike-stunts-by-riders-custom-motorcycles57.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(36,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv36" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn36">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(36,863,0),disablelike(36,863,0))" title="Like" id="like36" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(36,863,1),disableunlike(36,863,0))" title="Unlike" id="unlike36" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(36,863)"  title="Comment" id="comment36" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    bike stunt</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan36" >
                        1 Like 
                    </span>
                    <span id="commentscountspan36" ></span>
                    <span id="repincountspan36" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_36" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/23">Sports and Art</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv36">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment36" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent36"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(36,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_35">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/35" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/male-model-with-messy-hair50.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(35,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv35" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn35">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(35,863,0),disablelike(35,863,0))" title="Like" id="like35" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(35,863,1),disableunlike(35,863,0))" title="Unlike" id="unlike35" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(35,863)"  title="Comment" id="comment35" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    my sports</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan35" >
                        1 Like 
                    </span>
                    <span id="commentscountspan35" ></span>
                    <span id="repincountspan35" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_35" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/23">Sports and Art</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv35">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment35" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent35"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(35,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_33">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/33" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/cute-baby-girl58.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(33,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv33" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn33">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(33,863,0),disablelike(33,863,0))" title="Like" id="like33" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(33,863,1),disableunlike(33,863,0))" title="Unlike" id="unlike33" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(33,863)"  title="Comment" id="comment33" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    look me again</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan33" >
                        1 Like 
                    </span>
                    <span id="commentscountspan33" ></span>
                    <span id="repincountspan33" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_33" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/18">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv33">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment33" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent33"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(33,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_32">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/32" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/32" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/Cx1uUKIltBQ/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(32,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv32" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn32">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(32,863,0),disablelike(32,863,0))" title="Like" id="like32" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(32,863,1),disableunlike(32,863,0))" title="Unlike" id="unlike32" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(32,863)"  title="Comment" id="comment32" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    my city</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan32" >
                        1 Like 
                    </span>
                    <span id="commentscountspan32" ></span>
                    <span id="repincountspan32" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_32" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv32">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment32" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent32"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(32,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_30">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/30" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/124974958380022774_kCDtFw40_b63.jpeg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(30,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv30" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn30">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(30,863,0),disablelike(30,863,0))" title="Like" id="like30" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(30,863,1),disableunlike(30,863,0))" title="Unlike" id="unlike30" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(30,863)"  title="Comment" id="comment30" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    SOOOO cute!!!</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan30" >
                        1 Like 
                    </span>
                    <span id="commentscountspan30" ></span>
                    <span id="repincountspan30" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_30" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/17">Animals</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv30">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment30" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent30"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(30,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_28">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/28" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/sport%2Bbikes%2Bwallpapers-133.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(28,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv28" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn28">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(28,863,0),disablelike(28,863,0))" title="Like" id="like28" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(28,863,1),disableunlike(28,863,0))" title="Unlike" id="unlike28" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(28,863)"  title="Comment" id="comment28" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    racer .,</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan28" >
                        1 Like 
                    </span>
                    <span id="commentscountspan28" ></span>
                    <span id="repincountspan28" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_28" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv28">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment28" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent28"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(28,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_25">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/25" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/Michelle-Williams-Red-Carpet-Dresses-2012-440x65473.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(25,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv25" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn25">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(25,863,0),disablelike(25,863,0))" title="Like" id="like25" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(25,863,1),disableunlike(25,863,0))" title="Unlike" id="unlike25" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(25,863)"  title="Comment" id="comment25" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    red carpet.,</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan25" >
                        1 Like 
                    </span>
                    <span id="commentscountspan25" ></span>
                    <span id="repincountspan25" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_25" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv25">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment25" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent25"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(25,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_24">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/24" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/24" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/3kughv1fsDI/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(24,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv24" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn24">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(24,863,0),disablelike(24,863,0))" title="Like" id="like24" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(24,863,1),disableunlike(24,863,0))" title="Unlike" id="unlike24" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(24,863)"  title="Comment" id="comment24" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    breath</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan24" >
                        1 Like 
                    </span>
                    <span id="commentscountspan24" ></span>
                    <span id="repincountspan24" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_24" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/19">Favorite Places & Spaces</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv24">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment24" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent24"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(24,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            
        </div>

<nav id="page-nav">
<a id="navpage" href="http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&amp;view=home&amp;tmpl=component&amp;page=1"></a>
</nav>
<script>
    function disablelike(a,b,c)
{
    var like = "unlike"+a;
    document.getElementById(like).disabled=false;
}
function disableunlike(a,b,c)
{
    var unlike = "like"+a;
    document.getElementById(unlike).disabled=false;
}
    var scr = jQuery.noConflict();  scr(document).ready(function($){
        scr('.facebox').facebox({
            loadingImage : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/loading.gif',
            closeImage   : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/closelabel.png',
            currentUrl    :document.location.href
        }
    );
        var $container = scr('#container');
    
        $container.masonry({
            itemSelector : '.pin',
		
            isFitWidth: true,
            isResizable: true,
            columnWidth: 200,
            gutterWidth: 40
        });
        $container.find('div.pin').filter('div.pin').each(function()
        {
            var pin = scr(this);

            var pinHeight = pin.height();

            function checkSize()
            {
                var currHeight = pin.height();

                if (pinHeight != currHeight) {
                    $container.masonry('reload', function(){
                        pinHeight = currHeight;
                        setTimeout(checkSize, 50);
                    });
                } else {
                    setTimeout(checkSize, 100);
                }
            }

            checkSize();
        });
        $container.infinitescroll({
            navSelector  : '#page-nav',    // selector for the paged navigation
            nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
            itemSelector : '#container div.pin',     // selector for all items you'll retrieve
            // extraScrollPx: 500,
            loading: {
                finishedMsg: 'No more pins to load.',
                img: 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/loading.gif'
            }
        },
        // trigger Masonry as a callback
        function( newElements ) {
            // hide new items while they are loading
            var $newElems = scr( newElements ).css({ opacity: 0 });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function(){
                // show elems now they're ready
                $newElems.animate({ opacity: 1 });
                $container.masonry( 'appended', $newElems, true );
                scr(document).bind('beforeReveal.facebox', function() {
                    scr("#facebox .content").empty();
                });
                scr('.facebox').facebox({
                    loadingImage : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/loading.gif',
                    closeImage   : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/closelabel.png',
                    currentUrl    :document.location.href
                }
            );

            });
        }
    );

    });
// for showing and hiding the  new comment box
    function comment(pinId,userId) {
        if(userId==0)
        {
            window.open('?option=com_socialpinboard&view=people','_self');
            return false;
        }
        if(scr("#writecomment"+pinId).css('display')=="none"){
            scr(".homecommentwrite").hide();
            scr("#writecomment"+pinId).toggle();
        }else{
            scr(".homecommentwrite").hide();
        }
        scr("#commentContent"+pinId).focus();

        scr('#container').masonry( 'reload' );


    }
//do add the new comment
    function doHomeComment(pinId,firstName,lastName,userImage,userUrl) {

         document.getElementById('loading_grid_'+pinId).style.display='block';
        if(scr("#commentContent"+pinId).val()!="Add a comment..."&&scr("#commentContent"+pinId).val()!=""){
            scr.ajax({
                type:"POST",
                url:"?option=com_socialpinboard&view=ajaxcontrol&tmpl=component&task=getcommentinfo",
                data:{'pin_id':pinId,"comment":scr("#commentContent"+pinId).val()},
                success:function(message) {
                    document.getElementById('loading_grid_'+pinId).style.display='none';
                    var obj = jQuery.parseJSON(message);
                    var message = obj.comment;
                    var user_comment_id=obj.comment_id; 
                    scr("#commentContent"+pinId).val('Add a comment...');
                    if(message != "error") {

                        var message1 ='<li><div class="comment " ><a href="'+userUrl+'">';
                        if(userImage=='')
                        {
                            message1 += '<img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/no_user.jpg" title="'+firstName+lastName+'"  alt="'+firstName+lastName+'" width="30" class="ImgLink thumb-img"></a>';
                                           
                        }else
                        {
                            message1 += '<img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/'+userImage+'" title="'+firstName+lastName+'"  alt="'+firstName+lastName+'" width="30" class="ImgLink thumb-img"></a>';
                        }
                        message=message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                        message1 += '<p class="board_content"><a href="'+userUrl+'">'+firstName+' '+lastName+'</a>';
                        message1+=' '+'<span>'+message+'</span></p></div></li>';
                        scr('#commentDiv' + pinId + ' ul').append(message1);
                        
                        scr("#commentscountspan"+pinId).show();
                        scr('#container').masonry( 'reload' );
                        var span;
                        var count = 0;
                        if( scr("#commentscountspan"+pinId).text()){

                            count =parseInt(scr("#commentscountspan"+pinId).text().substring(0,scr("#commentscountspan"+pinId).text().indexOf(" ")))+1;
                            var counts =parseInt(scr("#commentsspan"+pinId).text().substring(0,scr("#commentscountspan"+pinId).text().indexOf(" ")))+1;
                            span = count+" Comments ";
                        }else{
                            span= "1 Comment ";
                        }
if(count==0)                        {
    
    //scr('.statistics').show();
}
                        scr("#commentscountspan"+pinId).text(span);
                        scr("#comme
	<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" dir="ltr" >
    <head>
                      <base href="http://www.apptha-demo.com/extensions/socialpinboard/index.php/component/socialpinboard/home" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="description" content="Social Pinboard" />
  <meta name="generator" content="Joomla! - Open Source Content Management" />
  <title>Social Pinboard</title>
  <link href="/extensions/socialpinboard/templates/socialpinboard/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/facebox.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/style.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/reset.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/components/com_socialpinboard/css/pinboard.css" type="text/css" />
  <link rel="stylesheet" href="/extensions/socialpinboard/modules/mod_socialpinboard_menu/css/socialpinboard_menu.css" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/jquery.ui.core.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/chrome.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/facebox.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/scroll/jquery.isotope.min.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/components/com_socialpinboard/javascript/scroll/jquery.infinitescroll.min.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/media/system/js/core.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/templates/socialpinboard/js/socialpinboard.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/templates/socialpinboard/js/scrolldown.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/modules/mod_socialpinboard_menu/js/ajaxupload.js" type="text/javascript"></script>
  <script src="/extensions/socialpinboard/modules/mod_socialpinboard_menu/js/loginvalidation.js" type="text/javascript"></script>


            <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
            
                    <link rel="stylesheet" href="/extensions/socialpinboard/templates/socialpinboard/css/template.css" type="text/css" />
            <link rel="stylesheet" href="/extensions/socialpinboard/templates/socialpinboard/css/reset.css" type="text/css" />
                <script type="text/javascript">var scr = jQuery.noConflict(); </script>
    </head>
    	<body id="CategoriesBarPage">
                    <div id="Header" class="clearfix">           
            
             <div class="logoheader">
                 <h1 id="logo"> <a href="http://www.apptha-demo.com/extensions/socialpinboard/" >
                    
                                        <img src="http://www.apptha-demo.com/extensions/socialpinboard//templates/socialpinboard/images/Logo.png" alt="" />
                                         </a>
                   
                </h1>
            </div>
            <div id="header_top_right">
                <style>
.customStyleSelectBox{margin-bottom:10px;}
</style>
<div id="social_menu">
    <ul id="pin-header-menu">
                    
                <li>
                    <a href="#" class="" onclick="Modal.show('Add'); return false">
                        Add +                        <span class=""></span>
                    </a>
                </li>
            
                <li style="cursor: pointer;"> <a href="#" class="nav about ">About us<span></span></a>
            <ul>
                <li  class="hover-me" > <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pinit"   >Pin It</a> </li>            </ul>
        </li>
        
        <li class="customer_grid" style="cursor: pointer;">
                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay" class="nav LoginNav">
                                            <img src="http://www.apptha-demo.com/extensions/socialpinboard//images/socialpinboard/avatars/MikeVihuela863.jpg" width="30" height="30"/>
                                            <h6>Mike</h6>
                </a>
                <ul class="pin-login-drop">
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/invitefriends">Invite Friends</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/invitefriends/facebook">Find Friends</a></li>
                    <li class="beforeDivider"><a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay">Boards</a></li>
                    <li class="divider"><a href="/extensions/socialpinboard/index.php/component/socialpinboard/pindisplay">Pins</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/likes">Likes</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/profile">Settings</a></li>
                    <li><a href="/extensions/socialpinboard/index.php/component/socialpinboard/people/logout">Logout</a></li>
                </ul>
                    </li>
        
    </ul>
     <ul id="solcial_links">
                    <li><a href="http://www.facebook.com/apptha" target="_blank"><img src="http://www.apptha-demo.com/extensions/socialpinboard//templates/socialpinboard/images/facebook-btn.png" title="Facebook" alt="Facebook" /></a></li>
                    <li><a href="https://twitter.com/apptha" target="_blank"><img src="http://www.apptha-demo.com/extensions/socialpinboard//templates/socialpinboard/images/twitter-btn.png" title="Twitter" alt="Twitter" /></a></li>
                </ul>
        
        <div id="Add" class="ModalContainer">
            <div class="modal wide PaddingLess">
                <div class="header lg"> <a href="#" class="close" onclick="Modal.close('Add'); return false"><strong>Close</strong><span></span></a>
                    <h2>Add</h2>
                </div>
                <p id="PinIt">Pin images from any website as you browse the web with the <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pinit" onclick="load_url(); return false">&ldquo;Pin It&rdquo; button</a>.</p>
                <div id="OpenLinks"> <a href="#" id="OpenScrapePin" class="cell" onclick="addClear();AddDialog.close('Add', 'ScrapePin'); return false">
                        <div class="menuAddUrl" id="scrape"></div>
                        <span>Add a Pin</span> </a> 
                    <script type="text/javascript">
                         
                        function addClear()
                        {
                            document.getElementById('ScrapePinInput').style.color="#C9C8C8";
                            document.getElementById('getImg').innerHTML = '';
			    document.getElementById('txtpin').style.color="#C9C8C8";
                            document.getElementById('txtpin').value = "Please Enter Description";
                            document.getElementById('srcimg').value='';
                        }
                    </script> 
                    <a id="OpenUploadPin" class="cell" onclick="AddDialog.close('Add', 'UploadPin'); return false">
                        <div class="imageUpload" id="upload"></div>
                        <span>Upload a Pin</span> </a> <a id="OpenCreateBoard" class="cell" onclick="AddDialog.close('Add', 'CreateBoard'); CreateBoardDialog.reset(); return false">
                        <div class="menuCreateBoard" id="board"></div>
                        <span>Create a Board</span> </a> </div>
            </div>          
            <div class="overlay"></div>
        </div>
        <div id="ScrapePin" class="ModalContainer">
            <div class="modal wide">
                <div class="header lg"> <a href="#" class="close" onclick="return addPinclose();" ><strong>Close</strong><span></span></a>
                    <h2>Add a Pin</h2>
                </div>
                <div class="PinTop inputHolder scrapePin"> 
                    <form method="post" action="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay" name="frmUrl" id="frmUrl">
                        <ul class="Form FancyForm">
                            <li>
                                <input id="ScrapePinInput" name="ScrapePinInput" type="text" value="Enter URL to find images"  onFocus="this.style.color='#333333';if(this.value == 'Enter URL to find images') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'Enter URL to find images'}" autocomplete="off"/>
                                <a href="javascript:void(0);" id="ScrapeButton" onclick="loadXMLDoc(); return false;" class="Button WhiteButton Button18 floatRight"><strong>Find Images</strong></a> 
                                <a href="javascript:void(0);" style="display: none;" id="ScrapeButton1" class="Button WhiteButton Button18 floatRight"><strong>Find Images...</strong></a>
                                <div style="clear:both;"></div>
                                <div class="example_link">eg: http://www.example.com </div>
                                <div id="urlImages" style="display:none;">
                                    <div class="site_img">
                                        <div class="ImagePicker">
                                            <div class="price"></div>
                                            <div class="Images pin" id="getImg"> </div>
                                        </div>
                                        <div class="navigation"> <a type="button" onclick="return nextPrev('prev')" name="prev" id="prev">&#171; Previous</a> <a type="button" onclick="return nextPrev('next')" name="next" id="next">Next &#187;</a> </div>
                                    </div>
                                    <input type="hidden" name="imgcnt" id="imgcnt" value="0"/>
                                    <div id="getimg_desc">
                                        <select name="pin_board" id="pin_board">
                                                                                            <option value="305" >Me and Me</option>
                                                                                            <option value="306" >Favorite Places & Spaces</option>
                                                                                            <option value="307" >Books Worth Reading</option>
                                                                                            <option value="308" >My Style</option>
                                                                                            <option value="309" >For the Home</option>
                                                                                    </select>
<!--                                         <select name="categories" id="pin_board">
                                                                                            <option value="1" >Arts</option>
                                                                                            <option value="4" >Drinks</option>
                                                                                            <option value="2" >Education</option>
                                                                                            <option value="3" >Food</option>
                                                                                            <option value="5" >Hair and Beauty</option>
                                                                                    </select>-->
                                        <div class="clearfix">
                                            <div class="uploadtext">
                                                <input style="color:#C9C8C8" type="text" name="uploadboardtxted" id="uploadboardtxted"onFocus="onFocusMenu(this,'Enter New Board Name');" onBlur="onBlurEvent(this,'Enter New Board Name');" value="Enter New Board Name" />
                                            </div>
                                            <div class="special" style=""><a href="javascript:void(0);" class="creat_bttn" id="board_creat_btn" onclick="addnewmenupin(863)" style="display:block">
                                                Create</a></div>
                                            <div id="boardErrorpin" class="clearfix"></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="clearfix" id="add_pin_desc">
                                            <div class="InputArea">
                                                <ul class="Form FancyForm">
                                                    <li class="noMarginBottom ">
                                                        <textarea class="DescriptionTextarea" value="Please Enter Description" style="color:grey; resize: none;" id="txtpin" rows="2" name="txtpin"  onFocus="onFocusMenu(this,'Please Enter Description');" onBlur="onBlurEvent(this,'Please Enter Description');" >Please Enter Description</textarea>
                                                        <span class="fff"></span> </li>
                                                </ul>
                                            </div>
                                            <div id="addpinerror"></div>
                                        </div>
                                        <div id="addError"></div>
                                        <input type="hidden" name="srcimg" id="srcimg" value=""/>
                                        <div id="downloadImages"></div>
                                        <input type="hidden" name="create_dates" id="create_dates" value="2013-02-11 06:38:06"/>
                                        <input type="submit"  name="add_pin" onclick="return validateImageUrl();" style="display: block" id="add_pin" value="Pin It"/>

                                        <strong class="edit-board-btn pinning" id="add_pining" style="display:none;">Pinning...</strong> </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div class="overlay"></div>
        </div>

        <!-- End of the Add pin--> 
        <!-- Upload the pin-->
        <div id="UploadPin" class="ModalContainer">
            <div class="modal wide" id="upload_pin_pic">
                <div class="header lg"> <a href="#" class="close" onclick="javascript:document.getElementById('upload_image_popup').style.display = 'none';javascript: document.getElementById('pricetags').style.display='none';javascript:document.getElementById('boardError').innerHTML = '';AddDialog.childClose('Add','UploadPin'); return false"><strong>Close</strong><span></span></a>
                    <h2>Upload a Pin</h2>
                    <div id="file_ext_error" style="display: none"></div>
                </div>
                <div class="PinTop">
                    <form action="" id="imageform" method="POST" enctype="multipart/form-data">
                        <div id="me" class="styleall" style=" cursor:pointer;"><span> Upload Image</span></div>
                        <span id="mestatus" ></span>
                        <div id="upload_image_popup" style="display:none;">
                            <div id="upload_pin" style="display:none;">
                                <div class="ImagePicker" id="pricetags" > <img class="Images pin" id="upload_img_popup" name="upload_img_popup"  alt="change image"  /> </div>
                                <ul class="img_upload">
                                    <li>
                                        <select class="customStyleSelectBox" name="upload_board" id="upload_board"  onchange="changeselected(this)">
                                                                                            <option value="305" > Me and Me</option>
                                                                                                <option value="306" > Favorite Places & Spaces</option>
                                                                                                <option value="307" > Books Worth Reading</option>
                                                                                                <option value="308" > My Style</option>
                                                                                                <option value="309" > For the Home</option>
                                                                                        </select>
                                        
<!--                                        <select class="customStyleSelectBox"  name="category_upload" id="category_upload"  onchange="changeselected(this)">
                                                                                            <option value="1"> Arts</option>
                                                                                                <option value="4"> Drinks</option>
                                                                                                <option value="2"> Education</option>
                                                                                                <option value="3"> Food</option>
                                                                                                <option value="5"> Hair and Beauty</option>
                                                                                        </select>-->
                                       
                                        <input type="hidden" name="board_selection" id="board_selection" value="305"/>
                                        <input type="hidden" name="image_id" id="image_id" value=""/>
                                        <div class="uploadtext">
                                            <input style="color:#C9C8C8" type="text" name="uploadboardtxt" id="uploadboardtxt" onFocus="onFocusMenu(this,'Enter New Board Name');" onBlur="onBlurEvent(this,'Enter New Board Name');" value="Enter New Board Name"/>
                                        </div>
                                        <div class="special" style=""><a href="javascript:void(0);" class="creat_bttn" onclick="addnewmenuboard(863)" style="display:block">
    Create 
                                            </a></div>
                                        <div id="boardError" style="clear: both; margin: 0 0 0 23px; "></div>
                                    </li>
                                    <li>
                                        <div class="InputArea">
                                            <ul class="Form FancyForm">
                                                <li class="noMarginBottom ">
                                                    <textarea  class="DescriptionTextarea" name="pin_desc" style="color:#C9C8C8; resize: none;" id="pin_desc" row="3" onFocus="onFocusMenu(this,'Please Enter Description');" onBlur="onBlurEvent(this,'Please Enter Description');" >Please Enter Description</textarea>
                                                    </li>
                                            </ul>
                                        </div>
                                        <div id="pinError"></div>
                                    </li>
                                    <li>
                                        <input type="submit" onclick ="return validatePin()" value="Pin It" name="uploadPin" id="uploadPin"/>
                                    </li>
                                    <div class="clear"></div>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
        <!-- End of Upload the Pin--> 

        <!-- To Create the Board -->
        <div id="CreateBoard" class="ModalContainer">
            <div class="modal wide" style="margin-bottom: -80px !important;">
                <div class="header lg"> <a href="#" class="close" onclick="javascript:document.getElementById('boardnameerror').innerHTML = '';document.getElementById('contributer').style.display = 'none';document.getElementById('menuSearchVal').style.display = 'none' ;document.getElementById('contributers_name_addboard').value = '';AddDialog.childClose('Add','CreateBoard'); return false"><strong>Close</strong><span></span></a>
                    <h2>Create a Board</h2>
                </div>
                <form action="" method="post" class="Form StaticForm noMargin">
                    <ul>
                        <li class="noBorderTop">
                            <label>Board Name</label>
                            <div class="floatright" style="width: 370px;">
                                <input id="board_name" type="text" name="board_name"  style="width: 370px;"/>
                                <div class="clear"></div>
                                <div id="boardnameerror"></div>
                                <span class="fff"></span> </div>
                        </li>
                        <li>
                            <input id="board_description" type="hidden" name="board_description" value="" />
                            <input id="created_date" type="hidden" name="created_date" value="2013-02-11 06:38:06" />
                            <div class="BoardListOverlay"></div>
                            <div id="CategoryPicker" class="BoardSelector BoardPickerselect">
                                <select name="board_category_id" id="board_category_id" class="customStyleSelectBox">
                                            <option class="BoardCategory" value=" 1"> Arts</option>
                                                                            <option class="BoardCategory" value=" 4"> Drinks</option>
                                                                            <option class="BoardCategory" value=" 2"> Education</option>
                                                                            <option class="BoardCategory" value=" 3"> Food</option>
                                                                            <option class="BoardCategory" value=" 5"> Hair and Beauty</option>
                                                                    </select>
                            </div>
                            <label>Board Category</label>
                            <div id="categorynameerror"></div>
                        </li>
                        <li>
                            <label class="radio">Who can pin?</label>
                            <div class="Right" style="float: right;">
                                <div style="display:none; border-top: 0;"></div>
                                <ul class="pinability">
                                    <li>
                                        <label>
                                            <input type="radio" name="board_access" value="0" checked="checked" onclick="contributersoff();" />
                                            <span>Just Me</span> </label>
                                    </li>
                                    <li class="last-child">
                                        <label>
                                            <input type="radio" name="board_access" value="1" onclick="contributers();"/>
                                            <span> Me + Contributors </span> </label>
                                    </li>
                                </ul>
                                    <div style="clear:  both;"></div>
                                        <div id="contributer" style="display: none;  float: right; margin: 10px 0 0; overflow: hidden;">
                                            <input type="text" name="contributers_name_addboard" id="contributers_name_addboard" autocomplete="off" style="color: #999; margin-bottom:0px; float: left ; width: 280px; height: 35px;" value="Name or Email Address" onkeyup="showResult(this.value);" onFocus="onFocusEvent(this,'Name or Email Address');" onBlur="onBlurEvent(this,'Name or Email Address');"   />
                                            <a  name="add_board_contributers" id="add_board_contributers" class="add_btn" onclick="userContributers();"  style="float:right; margin: 0px 0 0 10px; padding: 5px 23px;cursor:pointer;"> Add </a>
                                        </div>
                                        <div class="clear"></div>
                                        <div id="SearchVal">
                                            <ul id="menuSearchVal" class="static-form" style="display:none;">
                                            </ul>
                                        </div>
                                        <div id="loadingImage" style="display:none;"> <img src="http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu/images/loading.gif" width="20" height="20" alt="" /> </div>
                                    <div id="contributer_name"> </div>
                            </div>
                        </li>
                    </ul>
                    <div >
                        <input type="submit" onclick="return validateBoard();" name="btnBoard" id="btnBoard"  class="create_board" value="Create Board" />
                        <input type="hidden" name="id_contributers" id="id_contributers" value="" />
                    </div>
                    <div class="CreateBoardStatus error"></div>
                </form>
            </div>
            <div class="overlay"></div>
        </div>
        <!-- Repin contnet starts here -->
        <div id="Repin" class="ModalContainer">
            <div class="modal wide PostSetup" style="margin-bottom: -138px; ">
                <div id="postsetup">
                    <div class="header lg">
                        <h2>Repin</h2>
                        <a href="#" class="close-btn" onclick=" document.getElementById('descriptionerror').innerHTML='';document.getElementById('Header').style.zIndex = 999;Modal.close('Repin'); return false"></a> </div>
                    <div class="ImagePicker">
                        <div class="Images" id="imagepin"><img src="/extensions/socialpinboard/" name="pinImage" id="pinImage"></div>
                    </div>
                    <div class="PinForm">
                        <select name="repin_board" id="repin_board">
                                                            <option class="BoardCategory " value=" 305" >  Me and Me </option>
                                <option class="BoardCategory " value=" 306" >  Favorite Places & Spaces </option>
                                <option class="BoardCategory " value=" 307" >  Books Worth Reading </option>
                                <option class="BoardCategory " value=" 308" >  My Style </option>
                                <option class="BoardCategory " value=" 309" >  For the Home </option>
                        </select>
                        <input type="hidden" name="board_selection" id="board_selection" value="309"/>
                        <div class="uploadtext">
                            <input type="text" name="boardtxt" id="boardtxt" value=""/>
                        </div>
                        <div class="special"><a href="javascript:void(0);" class="creat_bttn" onclick="addrepinmenuboard(863)" style="display:block">
     Create
                            </a></div>
                        <div id="boardError"></div>
                        <div class="repin-text InputArea" style="float: left;width: 350px;">
                            <ul class="Form FancyForm">
                                <li class="noMarginBottom  val">
                                    <textarea class="DescriptionTextarea" id="DescriptionTextarea" rows="2" data-text-error-empty="Please enter a description." name="caption"></textarea>
                                    <div class="tagmate-menu" style="position: absolute; display: none; "></div>
                                    <span class="fff"></span> </li>
                            </ul>
                            <span id="descriptionerror"></span>
                            <input type="hidden" id="currencyvalue" value="$">
                            <input type="hidden" name="pin_type_id" id="pin_type_id" value=""/>
                            <input type="hidden" name="pin_repin_id" id="pin_repin_id" value=""/>
                            <input type="hidden" name="pin_real_pin_id" id="pin_real_pin_id" value=""/>
                            <input type="hidden" name="pin_url" id="pin_url" value=""/>
                            <input type="hidden" name="pin_user_id" id="pin_user_id" value="863"/>
                        </div>
                        <div class="CreateBoardStatus error mainerror" id="CreateBoardStatus"> </div>
                        <div class="Buttons" style="clear:both;">
                            <input type="button" id="uploadPin" onclick="return ajxGetBoards('http://www.apptha-demo.com/extensions/socialpinboard/');" value=" Pin It"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
            <div id="PostSuccess" class="modal wide PostSuccess" style="display:none;margin-bottom: -138px;margin-top:225px;text-align: center;overflow: hidden; font-size: 20px;">
                <div class="header lg" style="text-align: left;">
                    <h2><a href="#" class="close" onclick="document.getElementById('Header').style.zIndex = 3;RepinDialog.reset(); return false"><strong>Close</strong><span></span></a>Repin</h2>
                </div>
    Repinning... Please Wait... <span><a href="#" class="BoardLink" id="boardLink"></a></span>. </div>
        </div>
        <script type="text/javascript">
            var currencyvalue = document.getElementById("currencyvalue").value;

            var scr = jQuery.noConflict();  scr(document).ready(function($){
        
                ScrapePinDialog.setup();
                UploadPinDialog.setup();
                CreateBoardDialog.setup();
                RepinDialog.setup();
                FancyForm.setup();
            });
        </script> 
        <!-- Repin contenet ends here --> 
        <script type="text/javascript">

            function changeselected(obj)
            {
        
                var strUser = obj.options[obj.selectedIndex].value;
      
                document.getElementById('board_selection').value = strUser;
            }
            function contributers()
            {
                document.getElementById('contributer').style.display="block";
            }
            function contributersoff()
            {
                document.getElementById('contributer').style.display="none";
            }
           function showResult(str)
            {
                
                if(str!= "")
                    {
                str = jQuery.trim(str);
               
                if (window.XMLHttpRequest)
                {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                  
                }
                else
                {// code for IE6, IE5
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    
                }
                xmlhttp.onreadystatechange=function()
                {
                    if (xmlhttp.readyState==4 && xmlhttp.status==200)
                    {
                        
                        if(xmlhttp.responseText.length == 0)
                        {  document.getElementById("menuSearchVal").innerHTML="";
                            document.getElementById("menuSearchVal").style.display="none";
                            document.getElementById("loadingImage").style.display="none";

                        }
                        else{
                            document.getElementById("loadingImage").style.display="none";
                            document.getElementById("menuSearchVal").style.display="block";
                            

                            var searchValue=xmlhttp.responseText;
                            
                            //alert(searchValue.length);
                             var b='';
                            if(searchValue !='""'){

                            var obj = jQuery.parseJSON(searchValue);
                            if(searchValue==',')
                            {
                                document.getElementById("menuSearchVal").style.display='none';
                                return false;

                            }
                            var nameArray = obj.username;
                            var idArray=obj.userid

                           
                            for(var i=0;i< nameArray.length;i++)
                            {
                                b+='<li id="static_li" style="padding-left:5px;" onclick="userSelectBoard(\''+nameArray[i]+'\',\''+idArray[i]+'\')" >'+nameArray[i]+'</li>';
                            }
                            document.getElementById("contributer_name").innerHTML = '';
                            document.getElementById("menuSearchVal").innerHTML=b;
                            }
                            else{
                                document.getElementById("menuSearchVal").innerHTML = '';
                                document.getElementById("menuSearchVal").innerHTML ='No users found';
                            }
                           
                        }

                    }
                }
                var url = "?option=com_socialpinboard&view=ajaxcontrol&tmpl=component&task=getcontributers&user="+str;
                xmlhttp.open("GET",url,true);
                xmlhttp.send();
                    }
                    else{
                     document.getElementById("menuSearchVal").style.display= "none";
                    }
            }
        
            function userSelectBoard(userCon)
            {
                document.getElementById('contributers_name_addboard').value=userCon;
         
            }

        </script> 
        <script type="text/javascript" >
            scr(function(){
                var btnUpload=scr('#me');
                var mestatus=scr('#mestatus');
                var files=scr('#files');
                new AjaxUpload(btnUpload, {
                    action: 'http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu/saveimagefromupload.php',
                    name: 'uploadfile',
                    onSubmit: function(file, ext){
                        if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){ 
                            // extension is not allowed 
                            mestatus.text('Only JPG, PNG or GIF files are allowed');
                            return false;
                        }
                        mestatus.html('');
                    },
                    onComplete: function(file, response){
                        //On completion clear the status
                        //mestatus.text('Image Uploaded Sucessfully!');
                        //On completion clear the status
                        files.html('');
                        //Add uploaded file to list
                        if(response!=""){
                            document.getElementById('upload_img_popup').src = 'http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu//images/socialpinboard/temp/'+response;
                            document.getElementById('upload_image_popup').style.display="block";
                            document.getElementById('upload_pin').style.display="block";
                            document.getElementById('pricetags').style.display="block";
                            document.getElementById('image_id').value = response;
                        } 
                    }
                });
    		
            });
            
            function ajxGetBoards(baseurl){

                var xhr = getXhr();
                var board=document.getElementById('repin_board').value;
                if(board=='')
                {
              
                    document.getElementById('descriptionerror').innerHTML='<label style="color:red">Please Select A Board </label>';
                    return false;
                }
                var descriptions = document.getElementById('DescriptionTextarea').value;
                var a = document.getElementById('boardLink');
                a.href = baseurl+"?option=com_socialpinboard&view=boardpage&bId="+board;
                //    var selectedindex=document.getElementById('board_selection').selectedIndex;
                // a.textContent = document.getElementById('one-ddheader').innerHTML;
        
                if(descriptions=='')
                {
                    document.getElementById('descriptionerror').innerHTML='<label style="color:red">Please enter description</label>';
                    return false;
                }
                var pin_repin_id = document.getElementById('pin_repin_id').value;
                var pin_real_pin_id=document.getElementById('pin_real_pin_id').value;
                var pin_user_id=document.getElementById('pin_user_id').value;


                if (pin_user_id!=0)
                {
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4){
                            try
                            {
                                var options = xhr.responseText;
                                // var a = document.getElementById('PinLink');
                                // a.href = baseurl+"?option=com_socialpinboard&view=pin&pinid="+options;

                                if(options)
                                {
                                    var span;
                                    var count = 0
                                       
                                    if(isNaN(scr("#repincountspan"+pin_repin_id).text())){

                                        count =parseInt(scr("#repincountspan"+pin_repin_id).text().substring(0,scr("#repincountspan"+pin_repin_id).text().indexOf(" ")))+1;
                                        span = count+" Repins ";
                                    }else{
                                        span= "1 Repin ";
                                    }
                                    scr("#repincountspan"+pin_repin_id).text(span);
                            
                                    RepinDialog.append();
                                }
                            }
                            catch(e) {
                                alert(e.message)
                            }
                        }
                    }

                    var url = baseurl+'index.php?board_id='+board+'&description='+descriptions+'&repin_id='+pin_repin_id+'&real_pin_id='+pin_real_pin_id+'&pin_user_id='+pin_user_id;
            
                    xhr.open("GET",url,true);
                    xhr.send(null);
                }

            }

            
            
        </script>
    </div>
<script type="text/javascript">
        function validateBoard(){

            var boardtitle = document.getElementById('board_name').value;
            var categorytitle = document.getElementById('board_category_id').value;
            document.getElementById('categorynameerror').innerHTML='';
            document.getElementById('boardnameerror').innerHTML='';
            if(categorytitle == '0' ||categorytitle == '' ){
                document.getElementById('categorynameerror').innerHTML='<label style="color:red; margin-left: 180px;">Please Select a Category</label>';
                return false;
            }

            if(boardtitle == ''){
                document.getElementById('boardnameerror').innerHTML='<label style="color: red; font-size:12px; width:auto; font-weight:bold; float: left;">Please Enter the Board Name</label>';
                return false;
            }
        }

        function validatePin(){
    
      
            var boardName = document.getElementById('upload_board').value;
            var pinDesc = document.getElementById('pin_desc').value;
       
            if(boardName == '' || boardName=='0'){
                alert("ok");

                document.getElementById('boardError').innerHTML='<label id="login_error_msg" style="clear: both; margin: 0 0 0 1px; ">Please Enter the Board Name</label>';
                return false;
            }
       
            if(pinDesc == '' || pinDesc == 'Please Enter Description'){
                document.getElementById('pinError').innerHTML='<label id="login_error_msg" style="margin: 10px 0 0 -128px;display: block;clear: both;">Please Enter the Description</label>';
                return false;
            }
            document.getElementById('uploadPin').style.display='none';
            document.getElementById('addpinloader').style.display='block';
        
        }
        

        function validateImageUrl()
        {
           
    
            var desc = document.getElementById('txtpin').value;
            var str = document.getElementById('srcimg').value;
            if(str=='')
            {
                document.getElementById('addpinerror').innerHTML='<label id="login_error_msg" style="margin: 10px 0 0 22px;display: block;clear: both;">Image not exist</label>';
                return false;
            }
                   
                  
            if(desc == ''|| desc=='Please Enter Description'){
                document.getElementById('addpinerror').innerHTML='<label id="login_error_msg" style="padding: 0px;display: block;clear: both;position: relative;margin: 0;text-align: left;">Please Enter the Description</label>';
                return false;
            }
             document.getElementById('add_pin').style.display="none";
            document.getElementById('add_pining').style.display="block";
        }
    </script>
    <script type="text/javascript">
                        function loadXMLDoc()
                        {
                             var url;
                            var content;   
                            var filename = document.getElementById('ScrapePinInput').value;
                            if( filename.indexOf('http://') !== 0  && filename.indexOf('https://') !== 0){ 
        filename = 'http://' + filename;
    }
    
                            document.getElementById('imgcnt').value=0;
                            if(filename == ''){
                                alert('Please Enter Valid Url');
                                return false;
                            }else if (!isUrl(filename))
                            {
                                alert("Please Enter Valid Url");
                                return false;
                            }
							document.getElementById('ScrapeButton').style.display="none";
                             document.getElementById('ScrapeButton1').style.display="block";
                           
							
                            var matches = filename.match(/watch\?v=([a-zA-Z0-9\-_]+)/); //check for the youtube
                            var valid_extensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;   //regular expression for images
                            if(valid_extensions.test(filename)) //check the extensions available in the url
                            { 
                                
                                content = '<img id="imgsrc0" src="'+filename+'" />,'; // if available bind the image url with the src tag
                                
                                bindimage(content);
                                              
                            }
                            else if(matches) // if the url is the youtube
                            {
                                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/; //regular expression for youtube
                                var match = filename.match(regExp);  // get the array value of the url
                                if (match&&match[7].length==11){
                                    youtubeId =  match[7];
                                    content = '<input type="hidden" name="type" id="type" value="youtube"/>';
                                    content += '<img id="youtubeimg" src="http://img.youtube.com/vi/' +youtubeId+'/0.jpg" width="198" height="150"/>';
                                    content += '<input type="hidden" name="youtube_image" id="youtube_image" value="http://img.youtube.com/vi/' +youtubeId+ '/0.jpg"/>';
                                    bindimage(content);	
                                }
    						
                            }
                            else if (filename.indexOf('vimeo.com') > -1) {  //Checks for the vimeo condition
                                id = filename.match(/http:\/\/(?:www.)?(\w*).com\/(\d*)/)[2];
                                scr.ajax({
                                    url: 'http://vimeo.com/api/v2/video/' + id + '.json',
                                    dataType: 'jsonp',
                                    success: function(data) {
    									
                                        content = '<input type="hidden" name="type" id="type" value="vimeo"/>';
                                        content += '<img id="youtubeimg" src="' +data[0].thumbnail_large+'" width="198" height="150"/>';
                                        content += '<input type="hidden" name="youtube_image" id="youtube_image" value="' +data[0].thumbnail_large+ '"/>';
                                        bindimage(content);					
                                    }
                                });
                            }
                            else
                            {
                                url = filename;
                                
                                content = ajaxinclude(url);
    					
                            }
                        
                        }
    		
    		
                        function ajaxinclude(url) 
                        {
                            if (window.XMLHttpRequest)
                            {// code for IE7+, Firefox, Chrome, Opera, Safari
                                xmlhttp=new XMLHttpRequest();
                            }
                            else
                            {// code for IE6, IE5
                                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                            }
                            xmlhttp.onreadystatechange=function()
                            {   
                                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                                {
                                    bindimage(xmlhttp.responseText);
                                }

                            }
                            var strval=url.split('').reverse().join('');
                            
                            var pageurl = 'http://www.apptha-demo.com/extensions/socialpinboard//modules/mod_socialpinboard_menu/saveimagefromurl.php?url='+strval;
                            
                            xmlhttp.open("GET",pageurl,true);

                            xmlhttp.send();
                        } 
                  
                        function bindimage(content)
                        {
                            var Images = content.split(',');
                            document.getElementById("getImg").innerHTML='';
                            for(var i=0;i<Images.length;i++){
                                document.getElementById("getImg").innerHTML += Images[i];
                                if(document.getElementById("youtubeimg"))
                                    document.getElementById("srcimg").value = document.getElementById("youtubeimg").src;
                                document.getElementById('urlImages').style.display='block';
                                document.getElementById('ScrapeButton1').style.display = "none";
                                document.getElementById('ScrapeButton').style.display = "block";
                                if(i == 0){
    									
                                    if(document.getElementById("imgsrc"+i))
                                        document.getElementById("imgsrc"+i).style.display='block';
                                    document.getElementById('urlImages').style.display='block';
                                    if(document.getElementById("imgsrc"+i))
                                        document.getElementById('srcimg').value = document.getElementById("imgsrc"+i).src;
                                }
                                else
                                {
                                    document.getElementById("imgsrc"+i).style.display='none';

                                }
                            }
                        }
                        //validate url
                        function isUrl(s) {
                            var regexp = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/;
                            return regexp.test(s);
                        }

                    </script> 
                    <script type="text/javascript">
                        function nextPrev(type){
                            var imgcount = document.getElementById('imgcnt').value;
                            var orig = imgcount;
                            if(type == 'prev'){
                                imgcount--;
                            }
                            else if(type == 'next'){
                                imgcount++;
                            }
                         
                            if( document.getElementById("imgsrc"+imgcount))
                            {
                                document.getElementById("imgsrc"+orig).style.display='none';
                                document.getElementById('imgcnt').value = imgcount;
                                document.getElementById("imgsrc"+imgcount).style.display='block';
                                document.getElementById('srcimg').value = document.getElementById("imgsrc"+imgcount).src;
                        
                            }

                        }
                       function addPinclose()
                        {
                            
                            document.getElementById('urlImages').style.display = 'none';
                            document.getElementById('ScrapePinInput').value = '';
                            document.getElementById('boardErrorpin').innerHTML = '';
                            AddDialog.childClose('Add','ScrapePin'); 
                            document.getElementById('ScrapeButton1').style.display = 'none'; 
                            document.getElementById('ScrapeButton').style.display = 'block'; 
                            return false;
                            
                        }

                </script>
<script>
var Modal=Modal||{
    setup:function(){
        $(document).keydown(function(a){
            if(a.keyCode==27){
                var c=$(".ModalContainer:visible").attr("id");
                if(c)Modal.close(c);else $("#zoomScroll").length&&window.History.back();
                a.preventDefault()
                }
            })
    },
show:function(a){
    if(a=='EmailModal')
        {
            document.getElementById('MessageRecipientName').value='';
            document.getElementById('MessageRecipientEmail').value='';
            document.getElementById('MessageBody').value='';
            document.getElementById('output').innerHTML='';
        }
    var c=scr("#"+a);
    a=scr(".modal:first",c);
	if(scr('body').hasClass('noscrollf'))
	{
	}
	else
	{
    scr("body").addClass("noscroll");
	}
    c.show();
    var d=a.outerHeight()-50;
    a.css("margin-bottom","-"+d/2+"px");
    setTimeout(function(){
        c.addClass("visible");
        c.css("-webkit-transform","none")
        },1);
    return false
    },
close:function(a){
    var c=
    scr("#"+a);
    scr("#zoomScroll").length===0&&scr("body").removeClass("noscroll");
    c.removeClass("visible");
    setTimeout(function(){
        c.hide();
        c.css("-webkit-transform","translateZ(0)")
        },251);
    return false
    }
};

var RepinDialog=RepinDialog||{
    setup:function(){

        var a=scr("#Repin"),c=scr("form",a),d=scr(".Buttons .Button",a),f=scr("strong",d),g=scr(".DescriptionTextarea",a),b=scr(".mainerror",a);




            Tagging.initTextarea("#DescriptionTextarea");
            Tagging.priceTag("#DescriptionTextarea","#imagepin");
            scr("#Repin").submit(function(){
                Tagging.loadTags("#DescriptionTextarea","#id_pin_replies","#pin_tags","#id_buyable")
                });
            scr("#DescriptionTextarea").keyup(function(){
                scr("#postDescription").html(scr(this).val())
                })



        AddDialog.shareCheckboxes("Repin");




},
grid:function(){
    $(".repin_link").live("click",function(){

        pinID=$(this).parents(".pin").attr("data-id");
        RepinDialog.show(pinID);
        return false
        })
    },
show:function(a){


    },
reset:function(){
    document.getElementById('Header').style.zIndex = 7;
    var a=scr("#Repin");
    Modal.close("Repin");
    a.removeClass("visible").removeClass("super");
    scr(".PostSuccess",a).hide();
    scr("form",a).attr("action","");
    scr(".DescriptionTextarea",a).val("");
    scr(".ImagePicker .Images",a).html("");
    scr(".price",a).removeClass("visible").html("");
    scr(".mainerror",a).html("");
    scr(".Buttons .RedButton",a).removeClass("disabled");
    scr(".Buttons .RedButton strong",a).html("Pin It");
    scr("#repin_pin_id",a).val("")
    },
    append:function()
    {

var a=scr("#Repin");
//                        trackGAEvent("repin_submit","success","dialogue");
                        var h=scr("#PostSuccess");

                        h.show();
                        setTimeout(function(){
                            a.addClass("super")
                            },1);
                        setTimeout(function(){
                            RepinDialog.reset()
                            },2500);

    }
};
var BoardPicker=function(){
    return{
        setup:function(a,c,d){
            a=scr(a);
            var f=scr(".BoardListOverlay",a.parent()),g=scr(".BoardList",a),b=scr(".CurrentBoard",a),e=scr("ul",g);
            a.click(function(){
                g.show();
                f.show()
                });
            f.click(function(){
                g.hide();
                f.hide()
                });
            scr("li",e).live("click",function(){
                b.text(scr(this).text());
                f.hide();
                g.hide();
                c&&c(scr(this).attr("data"));
                return false
                });
            a=scr(".CreateBoard",g);
            var h=scr("input",a),k=scr(".Button",a);
            scr("strong",k);
            var l=scr(".CreateBoardStatus",a);

            k.click(function(){
                if(k.attr("disabled")==
                    "disabled")return false;
                if(h.val()=="Create New Board"){
                    l.html("Enter a board name").css("color","red").show();
                    return false
                    }
                    l.html("").hide();
                k.addClass("disabled").attr("disabled","disabled");

            return false
            })
        }
    }
}();
var AddDialog=function(){
    return{
        setup:function(a){
            var c="#"+a,d=scr(c);
            BoardPicker.setup(c+" .BoardPicker",function(f){
                scr(c+" #id_board").val(f)
                },function(f){
                scr(c+" #id_board").val(f)
                });
            AddDialog.shareCheckboxes(a);
            Tagging.initTextarea(c+" .DescriptionTextarea");
            Tagging.priceTag(c+" .DescriptionTextarea",c+" .ImagePicker");

    },
reset:function(a){
    a==="CreateBoard"&&CreateBoardDialog.reset();
    a==="ScrapePin"&&ScrapePinDialog.reset();
    a==="UploadPin"&&UploadPinDialog.reset();
    AddDialog._resets[a]&&AddDialog._resets[a]()
    },
close:function(a,c){
    scr("#"+a).addClass("super");
    Modal.show(c)
    },
childClose:function(a,
    c){
    var d=this,f=scr("#"+c);
    scr(".ModalContainer",f);

    //d.reset(c);

    scr("#"+a).removeClass("super");

    Modal.close(a);
    Modal.close(c)
    },
pinBottom:function(a){
    var c=scr("#"+a);
    scr(".PinBottom",c).slideDown(300,function(){
        var d=scr(".modal:first",c);
        d.css("margin-bottom","-"+d.outerHeight()/2+"px")
        })
    },
shareCheckboxes:function(a){
    function c(g){
        var b=scr("#"+a+" .publish_to_"+g),e=scr("#"+a+" #id_publish_to_"+g);
        b.change(function(){
            if(b.is(":checked")){
                e.attr("checked","checked");
                b.parent().addClass("active")
                }else{
                e.removeAttr("checked");
                b.parent().removeClass("active")
                }
            });
    var h=b.is(":checked");
    return function(){
        if(h){
            b.parent().addClass("active");
            b.attr("checked","checked")
            }else{
            b.parent().removeClass("active");
            b.removeAttr("checked")
            }
        }
}
var d=c("facebook"),f=c("twitter");
AddDialog._resets=AddDialog._resets||{};

AddDialog._resets[a]=function(){
    d();
    f()
    }
}
}
}();
var EditPin=function(){
    return{

        setup:function(){

            Tagging.initTextarea("#description_pin_edit");
            Tagging.priceTag("#description_pin_edit","#PinEditPreview");
            scr("#PinEdit").submit(function(){
                Tagging.loadTags("#description_pin_edit","#id_pin_replies","#pin_tags","#id_buyable")
                });
            scr("#description_pin_edit").keyup(function(){
                scr("#postDescription").html(scr(this).val())
                })
            }
        }
}();




var CreateBoardDialog=function(){
    return{
        setup:function(){
            function a(){
                if(!g){
                    g=true;
                    Tagging.initInput("#CreateBoard #collaborator_name",function(b){
                        f=b
                        },function(){
                        $("#CreateBoard #submit_collaborator").click()
                        })
                    }
                }
            function c(){
            var b=[];
            $("#CurrentCollaborators .Collaborator",d).each(function(){
                b.push($(this).attr("username"))
                });
            return b
            }
            var d=scr("#CreateBoard"),f=null,g=false;


BoardPicker.setup("#CreateBoard .BoardPicker",function(b){
    $("#id_category",d).val(b)
    });
scr("#BoardName",d).keyup(function(){
    scr(".board_name.error",
        d).html()!==""&&scr(".board_name.error",d).html("")
    });
scr(".Submit .Button",d).click(function(){

    if(scr("#BoardName",d).val()=="Board Name"||$("#BoardName",d).val()==""){
        scr(".board_name.error",d).html("Please enter a board name").show();
        return false
        }
        if(!scr("#id_category",d).val()){
        scr(".board_category.error",d).html("Please select a category").show();
        return false
        }
        var b=scr(".Submit .Button",d),e=b.children("strong");
    b.attr("disabled","disabled").addClass("disabled");
    e.html("Creating &hellip;");

return false
})
},
reset:function(){
    $("#BoardName").val("");
    $("input[value='me']").attr("checked",true);
    $("#CurrentCollaborators").empty()
    }
}
}();



var CropImage=function(){
    this.initialize.apply(this,arguments)
    };
    var BoardCoverSelector=function(){
    this.initialize.apply(this,arguments)
    };
    var Tagging=function(){
    return{
        friends:null,
        friendsLinks:{},
        getFriends:function(a,c,d){
            var e=a.term;
            (function(f){
                Tagging.friends?f():$.get("/x2ns4tdf0cd7cc9b/_getfriends/",function(b){
                    Tagging.friends=[];
                    $.each(b,function(g,h){
                        Tagging.friends.push({
                            label:h.name,
                            value:h.username,
                            image:h.image,
                            link:"/"+h.username+"/",
                            category:"People"
                        });
                        Tagging.friendsLinks["/"+h.username+"/"]=1
                        });
                    f()
                    })
                })(function(){
                var f=[];
                if(d)for(name in d)Tagging.friendsLinks[name]||!d.hasOwnProperty(name)||f.push(d[name]);f=f.concat(Tagging.friends);
                if(e)f=tagmate.filter_options(f,e);
                c(f)
                })
            },
        initInput:function(a,c,d){
            a=$(a);
            var e=$("<div class='CollabAutocompleteHolder'></div>");
            a.after(e);
            a.autocomplete({
                source:Tagging.getFriends,
                minLength:1,
                delay:5,
                appendTo:e,
                change:function(f,b){
                    c&&c(b.item)
                    },
                select:function(f,b){
                    c&&c(b.item);
                    return false
                    },
                position:{
                    my:"left top",
                    at:"left bottom",
                    offset:"0 -1"
                }
            }).keydown(function(f){
            f.which==13&&d&&d()
            });

        },
initTextarea:function(a,c){
    a=scr(a);
    var d={};

    d["@"]=tagmate.USER_TAG_EXPR;
    d["#"]=tagmate.HASH_TAG_EXPR;
    d.$=tagmate.USD_TAG_EXPR;
    d["\u00a3"]=tagmate.GBP_TAG_EXPR;
    a.tagmate({
        tagchars:d,
        sources:{
            "@":function(e,f){
                Tagging.getFriends(e,f,c)
                }
            }
    })
},
loadTags:function(a,c,d,e){
    a=$(a).getTags();
    for(var f=[],b=[],g=null,h=0;h<a.length;h++){
        a[h][0]==
        "@"&&f.push(a[h].substr(1));
        a[h][0]=="#"&&b.push(a[h].substr(1));
        if(a[h][0]=="$"||a[h][0]=="\u00a3")g=a[h]
            }
            $(c).val(f.join(","));
    $(d).val(b.join(","));
    $(e).val(g)
    },
priceTag:function(a,c){

    function d(){
        var e=scr(".price",c);
        if(e.length<=0){
            e=scr("<div class='price'></div>");
            c.prepend(e)
            }
            var f=a.getTags({
            $:tagmate.USD_TAG_EXPR,
            "\u00a3":tagmate.GBP_TAG_EXPR
            });
        if(f&&f.length>0){
            e.text(f[f.length-1]);
            e.addClass("visible");
            }else{
            e.removeClass("visible");
            e.text("")
            }
        }
    a=scr(a);
c=scr(c);
a.unbind(".priceTag").bind("keyup.priceTag",
    d).bind("focus.priceTag",d).bind("change.priceTag",d);
d()
}
}
}();
var ScrapePinDialog=ScrapePinDialog||{
    id:"ScrapePin",
    setup:function(){
        var a=this;
        AddDialog.setup(a.id);
        a.initScraperInput()
        },
    initScraperInput:function(){
        function a(j){
            return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(j)
            }
            function c(j){
            var k=true;
            if(j.indexOf("http")!=0)j="http://"+j;
            if(j=="")k=false;
            if(j=="http://")k=false;
            if(j.length<2)k=false;
            if(j.indexOf(".")==-1)k=false;
            a(j)||(k=false);
            return k
            }
            function d(){
            var j=scr("#"+ScrapePinDialog.id),k=scr("#ScrapePinInput").val();

            }
    function e(){
    if(images_count>0){
        images_count=
        -1;
        f()
        }
    }
function f(){
    strHtml="";
    imgFound=false;
    for(var j=foundCtr=0;j<imagesArray.length;j++){
        img=imagesArray[j];
        if(img.width>=150&&img.height>=50){
            imgFound=true;
            foundCtr++;
            strHtml+="<li>"+(is_video(img.src)?"<img src='"+media_url+"images/VideoIndicator.png' alt='Video Icon' class='video' />":"")+"<img src='"+img.src+"' width='156px' alt='' /></li>"
            }
        }
    if(strHtml!=""){
    $("#ScrapePin .ImagePicker .Images ul").html(strHtml);
    b(foundCtr)
    }else alert("No Large Images Found.")
    }
    function b(){
    var j=function(p,
        s){
        im=$(s).find("img")[0];
        if($(im).hasClass("video"))im=$(s).find("img")[1];
        src=$(im).attr("src");
        $("#id_img_url").val(src);
        $("#id_link").val($("#ScrapePinInput").val())
        },k=$("#ScrapePin .ImagePicker .Images").jcarousel({
        buttonNextHTML:null,
        buttonPrevHTML:null,
        initCallback:function(p){
            $("#ScrapePin .imagePickerNext").click(function(){
                p.next();
                return false
                });
            $("#ScrapePin .imagePickerPrevious").click(function(){
                p.prev();
                return false
                })
            },
        animation:"fast",
        itemVisibleInCallback:{
            onAfterAnimation:j
        },
        scroll:1
    });
    j(k,scr("#ScrapePin .ImagePicker").find("li")[0],1,"next")
    }
    function g(){
    var j=scr("#ScrapeButton");
    if(c(scr("#ScrapePinInput").val())){
        j.addClass("disabled");
        d()
        }else{
        alert("Please enter a valid website URL");
        j.removeClass("disabled")
        }
    }
var h="";
scr("#ScrapePinInput").bind("keydown",function(j){
    j.keyCode===13&&g()
    });
scr("#ScrapeButton").click(function(){
    g();
    return false
    })
},
reset:function(){
    var a=$("#"+this.id);
    $("#ScrapePinInput",a).val("");
    $(".PinBottom",a).hide();
    $(".modal",a).css("margin-bottom","0");
    $(".Buttons .Button",
        a).removeClass("disabled");
    $(".Buttons .Button strong",a).html("Pin It");
    ScrapePinDialog.initScraperInput()
    }
};
var UploadPinDialog=UploadPinDialog||{
    id:"UploadPin",
    setup:function(){
        var a=this,c=scr("#"+a.id);
        AddDialog.setup(a.id);

    },
reset:function(){
    var a=$("#"+this.id);
    $("input[type=file]",a).val("");
    $(".PinBottom",a).hide();
    $(".modal",a).css("margin-bottom","0");
    $(".Buttons .Button",a).removeClass("disabled");
    $(".Buttons .Button strong",a).html("Pin It")
    }
};
var FancyForm=function(){
    return{
        inputs:".Form input, .Form textarea",
        button:".SubmitButton",
        setup:function(){
            var a=this;
            this.inputs=scr(this.inputs);
            a.inputs.each(function(){
                var c=scr(this);
                a.checkVal(c)
                });
            a.inputs.live("keyup blur",function(){
                var c=scr(this);
                a.checkVal(c);
                var d=c.parents("ul"),e=c.parents(".Form").find(a.button);
                c.parents("li").hasClass("NoCheck")||a.checkDisabled(d,e)
                });
            scr(a.button).live("click",function(){
                var c=scr(this).attr("data-form");
                if(scr(this).hasClass("disabled"))return false;else scr("#"+
                    c+" form").submit()
                    })
            },
        checkVal:function(a){
            a.val().length>0?a.parent("li").addClass("val"):a.parent("li").removeClass("val")
            },
        checkDisabled:function(a,c){
            a.children("li:not(.optional)").length<=a.children("li.val").length?c.removeClass("disabled"):c.addClass("disabled")
            }
        }
}();
(function(){
    jQuery.each({
        getSelection:function(){
            var a=this.jquery?this[0]:this;
            return("selectionStart"in a&&function(){
                var c=a.selectionEnd-a.selectionStart;
                return{
                    start:a.selectionStart,
                    end:a.selectionEnd,
                    length:c,
                    text:a.value.substr(a.selectionStart,c)
                    }
                }||document.selection&&function(){
                a.focus();
                var c=document.selection.createRange();
                if(c==null)return{
                    start:0,
                    end:a.value.length,
                    length:0
                };

                var d=a.createTextRange(),e=d.duplicate();
                d.moveToBookmark(c.getBookmark());
                e.setEndPoint("EndToStart",d);
                var f=
                e.text.length,b=f;
                for(d=0;d<f;d++)e.text.charCodeAt(d)==13&&b--;
                f=e=c.text.length;
                for(d=0;d<e;d++)c.text.charCodeAt(d)==13&&f--;
                return{
                    start:b,
                    end:b+f,
                    length:f,
                    text:c.text
                    }
                }||function(){
            return{
                start:0,
                end:a.value.length,
                length:0
            }
        })()
    },
setSelection:function(a,c){
    var d=this.jquery?this[0]:this,e=a||0,f=c||0;
    return("selectionStart"in d&&function(){
        d.focus();
        d.selectionStart=e;
        d.selectionEnd=f;
        return this
        }||document.selection&&function(){
        d.focus();
        var b=d.createTextRange(),g=e;
        for(i=0;i<g;i++)if(d.value[i].search(/[\r\n]/)!=
            -1)e-=0.5;g=f;
        for(i=0;i<g;i++)if(d.value[i].search(/[\r\n]/)!=-1)f-=0.5;b.moveEnd("textedit",-1);
        b.moveStart("character",e);
        b.moveEnd("character",f-e);
        b.select();
        return this
        }||function(){
        return this
        })()
    },
replaceSelection:function(a){
    var c=this.jquery?this[0]:this,d=a||"";
    return("selectionStart"in c&&function(){
        c.value=c.value.substr(0,c.selectionStart)+d+c.value.substr(c.selectionEnd,c.value.length);
        return this
        }||document.selection&&function(){
        c.focus();
        document.selection.createRange().text=d;
        return this
        }||
    function(){
        c.value+=d;
        return this
        })()
    }
},function(a){
    jQuery.fn[a]=this
    })
})();

var tagmate=tagmate||{
    USER_TAG_EXPR:"@\\w+(?: \\w*)?",
    HASH_TAG_EXPR:"#\\w+",
    USD_TAG_EXPR:"\\"+currencyvalue+"(?:(?:\\d{1,3}(?:\\,\\d{3})+)|(?:\\d+))(?:\\.\\d{2})?"||"\\ð(?:(?:\\d{1,3}(?:\\,\\d{3})+)|(?:\\d+))(?:\\.\\d{2})?",

    filter_options:function(a,c){
        for(var d=[],e=0;e<a.length;e++){
            var f=a[e].label.toLowerCase(),b=c.toLowerCase();
            b.length<=f.length&&f.indexOf(b)==0&&d.push(a[e])
            }
            return d
        },
    sort_options:function(a){
        return a.sort(function(c,d){
            c=c.label.toLowerCase();
            d=d.label.toLowerCase();
            if(c>
                d)return 1;
            else if(c<d)return-1;
            return 0
            })
        }
    };
(function(a){
    function c(b,g,h){
        b=b.substring(h||0).search(g);
        return b>=0?b+(h||0):b
        }
        function d(b){
        return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
        }
        function e(b,g,h){
        var j={};

        for(tok in g)if(h&&h[tok]){
            var k={},p={};

            for(key in h[tok]){
                var s=h[tok][key].value,o=h[tok][key].label,l=d(tok+o),q=["(?:^(",")$|^(",")\\W|\\W(",")\\W|\\W(",")$)"].join(l),u=0;
                for(q=new RegExp(q,"gm");(u=c(b.val(),q,u))>-1;){
                    var v=p[u]?p[u]:null;

                    if(!v||k[v].length<o.length)p[u]=s;
                    k[s]=o;
                    u+=o.length+1
                    }
                }
                for(u in p)j[tok+p[u]]=
            tok
            }else{
            k=null;
            for(q=new RegExp("("+g[tok]+")","gm");k=q.exec(b.val());)j[k[1]]=tok
                }
                b=[];
    for(l in j)b.push(l);return b
    }
    var f={
    "@":tagmate.USER_TAG_EXPR,
    "#":tagmate.HASH_TAG_EXPR,
    $:tagmate.USD_TAG_EXPR,
    "\u00a3":tagmate.GBP_TAG_EXPR
    };

a.fn.extend({
    getTags:function(b,g){
        var h=a(this);
        b=b||h.data("_tagmate_tagchars");
        g=g||h.data("_tagmate_sources");
        return e(h,b,g)
        },
    tagmate:function(b){
        function g(o,l,q){
            for(l=new RegExp("["+l+"]");q>=0&&!l.test(o[q]);q--);
            return q
            }
            function h(o){
            var l=o.val(),q=o.getSelection(),
            u=-1;
            o=null;
            for(tok in s.tagchars){
                var v=g(l,tok,q.start);
                if(v>u){
                    u=v;
                    o=tok
                    }
                }
            l=l.substring(u+1,q.start);
        if((new RegExp("^"+s.tagchars[o])).exec(o+l))return o+l;
        return null
        }
        function j(o,l,q){
        var u=o.val(),v=o.getSelection();
        v=g(u,l[0],v.start);
        var z=u.substr(0,v);
        u=u.substr(v+l.length);
        o.val(z+l[0]+q+u);
        u=v+q.length+1;
        o.setSelection(u,u);
        s.replace_tag&&s.replace_tag(l,q)
        }
        function k(o,l){
        l=tagmate.sort_options(l);
        for(var q=0;q<l.length;q++){
            var u=l[q].label,v=l[q].image;
            q==0&&o.html("");
            var z="<span>"+
            u+"</span>";
            if(v)z="<img src='"+v+"' alt='"+u+"'/>"+z;
            u=s.menu_option_class;
            if(q==0)u+=" "+s.menu_option_active_class;
            o.append("<div class='"+u+"'>"+z+"</div>")
            }
        }
        function p(o,l){
    var q=l=="down"?":first-child":":last-child",u=l=="down"?"next":"prev";
    l=o.children("."+s.menu_option_active_class);
    if(l.length==0)l=o.children(q);
    else{
        l.removeClass(s.menu_option_active_class);
        l=l[u]().length>0?l[u]():l
        }
        l.addClass(s.menu_option_active_class);
    u=o.children();
    var v=Math.floor(a(o).height()/a(u[0]).height())-
    1;
    if(a(o).height()%a(u[0]).height()>0)v-=1;
    for(q=0;q<u.length&&a(u[q]).html()!=a(l).html();q++);
    q>v&&q-v>=0&&q-v<u.length&&o.scrollTo(u[q-v])
    }
    var s={
    tagchars:f,
    sources:null,
    capture_tag:null,
    replace_tag:null,
    menu:null,
    menu_class:"tagmate-menu",
    menu_option_class:"tagmate-menu-option",
    menu_option_active_class:"tagmate-menu-option-active"
};

return this.each(function(){
    function o(){
        v.hide();
        var B=h(l);
        if(B){
            var F=B[0],n=B.substr(1),m=l.getSelection(),y=g(l.val(),F,m.start);
            m.start-y<=B.length&&function(A){
                if(typeof s.sources[F]===
                    "object")A(tagmate.filter_options(s.sources[F],n));else typeof s.sources[F]==="function"?s.sources[F]({
                    term:n
                },A):A()
                    }(function(A){
                if(A&&A.length>0){
                    k(v,A);
                    v.css("top",l.outerHeight()-1+"px");
                    v.show();
                    for(var D=l.data("_tagmate_sources"),E=0;E<A.length;E++){
                        for(var K=false,L=0;!K&&L<D[F].length;L++)K=D[F][L].value==A[E].value;
                        K||D[F].push(A[E])
                        }
                    }
                    B&&s.capture_tag&&s.capture_tag(B)
                })
        }
    }
b&&a.extend(s,b);
    var l=a(this);
    l.data("_tagmate_tagchars",s.tagchars);
    var q={};

    for(var u in s.sources)q[u]=[];l.data("_tagmate_sources",
    q);
var v=s.menu;
if(!v){
    v=a("<div class='"+s.menu_class+"'></div>");
    l.after(v)
    }
    l.offset();
    v.css("position","absolute");
    v.hide();
    var z=false;
    a(l).unbind(".tagmate").bind("focus.tagmate",function(){
    o()
    }).bind("blur.tagmate",function(){
    setTimeout(function(){
        v.hide()
        },300)
    }).bind("click.tagmate",function(){
    o()
    }).bind("keydown.tagmate",function(B){
    if(v.is(":visible"))if(B.keyCode==40){
        p(v,"down");
        z=true;
        return false
        }else if(B.keyCode==38){
        p(v,"up");
        z=true;
        return false
        }else if(B.keyCode==13){
        B=v.children("."+
            s.menu_option_active_class).text();
        var F=h(l);
        if(F&&B){
            j(l,F,B);
            v.hide();
            z=true;
            return false
            }
        }else if(B.keyCode==27){
        v.hide();
        z=true;
        return false
        }
    }).bind("keyup.tagmate",function(){
    if(z){
        z=false;
        return true
        }
        o()
    });
a("."+s.menu_class+" ."+s.menu_option_class).die("click.tagmate").live("click.tagmate",function(){
    var B=a(this).text(),F=h(l);
    j(l,F,B);
    v.hide();
    z=true;
    return false
    })
})
}
})
})(jQuery);

</script>
               
                <div class="clear"></div>
                <div id="Search">
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
<form method="post" name="taskform" action="/extensions/socialpinboard/index.php/component/socialpinboard/search">
    <input type="text" name="serachVal" id="serachVal" value="Search"  onFocus="if(this.value == 'Search') {this.value = '';}" onBlur="if (this.value == '') {this.value = 'Search'}" />
<!--    <input type="text" name="serachVal" id="serachVal" value="Search"  onFocus="if(this.value == JTEXT::_('MOD_SOCIALPINBOARD_SEARCH')) {this.value = '';}" onBlur="if (this.value == '') {this.value = JTEXT::_('MOD_SOCIALPINBOARD_SEARCH');}" />-->
    <input type="submit" name="search" id="search" value="" />   
</form>



             </div>
            </div>
        </div>
        <div id="CategoriesBar" class="clearfix">
            <form name="category_list" action="/extensions/socialpinboard/index.php/component/socialpinboard/home" method="post">
<ul class="catMenu HeaderContainer">
        
    <li>


        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/home?pinners=youfollow" class="nav">PINNERS YOU FOLLOW</a></li>
        <li class="submenu">
                
        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/home/all" class="nav about">
            Everything</a>

        <ul id="CategoriesDropdown">
           
            <li>
                <span class="SubmenuColumn">
                <a style="cursor: pointer" onclick="return getCategories(' 1','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Arts')">Arts</a>
                    
                <a style="cursor: pointer" onclick="return getCategories(' 4','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Drinks')">Drinks</a>
                    
                <a style="cursor: pointer" onclick="return getCategories(' 2','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Education')">Education</a>
                    </span><span class="SubmenuColumn">
                <a style="cursor: pointer" onclick="return getCategories(' 3','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Food')">Food</a>
                    
                <a style="cursor: pointer" onclick="return getCategories(' 5','http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&view=home&category=Hair+and+Beauty')">Hair and Beauty</a>
                    </span>                   <input type="hidden" value="5" id="cat_id" name="cat_id"/>
            </li>
        </ul>


    </li>

    <li>
        
        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/video" class=" ">Videos</a>
            </li>
    <li>
                      <a href="/extensions/socialpinboard/index.php/component/socialpinboard/popular" class="nav">Popular</a>
            </li>
    <li>
                 <a href="/extensions/socialpinboard/index.php/component/socialpinboard/gift" class="nav">Gifts</a>
            </li>


</ul>
</form>
    <a id="home_invite_frnds" href="/extensions/socialpinboard/index.php/component/socialpinboard/invitefriends">Invite Friends</a>
    <script type="text/javascript">
    function getCategories(cat_id,cat_name)
    {
        document.getElementById('cat_id').value=cat_id;
        document.category_list.submit();
        return true;
    }
    
    </script>


        </div>
        <!--        <div id="content_banner">
            
        </div>-->
              <div id="content_color">
            
        </div>
           <div id="wrapper" >
                <div id="ColumnContainer" >
                   <div id="login_error_msg">
                       
<div id="system-message-container">
</div>
                   </div>
                                               <script>var scr = jQuery.noConflict();</script>
<div id="container">
    
        <script language='javascript'>  
            function loaddefimages(Id)  
            {  
                document.getElementById(Id).src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/no_user.jpg";  
                
            }   
          
        	    
        </script> 


        <div class="pin">


            <div class="ProfileSidebar profileslider_user">
                <h1>Mike Vihuela</h1>




                <!-- ProfileImage-->

                <div class="ProfileImage">  
                                            <img src="http://www.apptha-demo.com/extensions/socialpinboard//images/socialpinboard/avatars/MikeVihuela863_o.jpg"  style="width: 15em;" />        
                        
                        <a href="/extensions/socialpinboard/index.php/component/socialpinboard/profile" class="recent_activities_edit">
                        Edit Profile                        </a>
                            
                        <p class="profrile_grid" style="font-style:bold;"></p>
                        <p class="profrile_grid"></p>
                            <p style="text-align: left;text-decoration:underline;"><a href="http://" target="_blank"></a></p>
                </div>


                <!-- ProfileLinks-->
                <ul class="user-activity">

                    
                                        <div class="recent_activity_bg">
                                            </div>
                </ul>
            </div>
        </div>
                                                <div class="pin" id="pin_div_136">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/136" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/136.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(136,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv136" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn136">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(136,863,0),disablelike(136,863,0))" title="Like" id="like136" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(136,863,1),disableunlike(136,863,0))" title="Unlike" id="unlike136" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(136,863)"  title="Comment" id="comment136" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    #flag</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan136" >
                         
                    </span>
                    <span id="commentscountspan136" ></span>
                    <span id="repincountspan136" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_136" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/clinkcloud861.jpg" title="clinkcloud " 
                                 alt="clinkcloud " width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">Clinkcloud </a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/300">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv136">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment136" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent136"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(136,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_135">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/135" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/135.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(135,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv135" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn135">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(135,863,0),disablelike(135,863,0))" title="Like" id="like135" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(135,863,1),disableunlike(135,863,0))" title="Unlike" id="unlike135" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(135,863)"  title="Comment" id="comment135" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    testing ....................................................................................</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan135" >
                         
                    </span>
                    <span id="commentscountspan135" ></span>
                    <span id="repincountspan135" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_135" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/clinkcloud861.jpg" title="clinkcloud " 
                                 alt="clinkcloud " width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">Clinkcloud </a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/300">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv135">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment135" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent135"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(135,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_134">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/134" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/134" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/SwzSAzYbu2k/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(134,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv134" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn134">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(134,863,0),disablelike(134,863,0))" title="Like" id="like134" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(134,863,1),disableunlike(134,863,0))" title="Unlike" id="unlike134" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(134,863)"  title="Comment" id="comment134" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    Pow wow</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan134" >
                         
                    </span>
                    <span id="commentscountspan134" ></span>
                    <span id="repincountspan134" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_134" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/clinkcloud861.jpg" title="clinkcloud " 
                                 alt="clinkcloud " width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/861">Clinkcloud </a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/300">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv134">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment134" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent134"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(134,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_47">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/47" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/07-amazing-photographs-19081154.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(47,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv47" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn47">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(47,863,0),disablelike(47,863,0))" title="Like" id="like47" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(47,863,1),disableunlike(47,863,0))" title="Unlike" id="unlike47" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(47,863)"  title="Comment" id="comment47" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    Wow...</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan47" >
                        1 Like 
                    </span>
                    <span id="commentscountspan47" ></span>
                    <span id="repincountspan47" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_47" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/16">New</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv47">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment47" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent47"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(47,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_46">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/46" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/134632329717161390.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(46,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv46" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn46">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(46,863,0),disablelike(46,863,0))" title="Like" id="like46" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(46,863,1),disableunlike(46,863,0))" title="Unlike" id="unlike46" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(46,863)"  title="Comment" id="comment46" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    green way</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan46" >
                        3 Likes 
                    </span>
                    <span id="commentscountspan46" ></span>
                    <span id="repincountspan46" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_46" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/19">Favorite Places & Spaces</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv46">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment46" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent46"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(46,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_45">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/45" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/8E10262627556.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(45,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv45" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn45">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(45,863,0),disablelike(45,863,0))" title="Like" id="like45" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(45,863,1),disableunlike(45,863,0))" title="Unlike" id="unlike45" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(45,863)"  title="Comment" id="comment45" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    like one</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan45" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan45" ></span>
                    <span id="repincountspan45" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_45" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/29">Photo Models</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv45">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment45" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent45"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(45,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_43">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/43" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/43" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/SwzSAzYbu2k/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(43,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv43" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn43">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(43,863,0),disablelike(43,863,0))" title="Like" id="like43" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(43,863,1),disableunlike(43,863,0))" title="Unlike" id="unlike43" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(43,863)"  title="Comment" id="comment43" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    Pow wow</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan43" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan43" ></span>
                    <span id="repincountspan43" >1 Repin 
                    </span>
                    <i class="loading_grid" id="loading_grid_43" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/18">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv43">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment43" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent43"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(43,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_42">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/42" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/258745941061643828_sgucg6X8_b84.jpeg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(42,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv42" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn42">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(42,863,0),disablelike(42,863,0))" title="Like" id="like42" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(42,863,1),disableunlike(42,863,0))" title="Unlike" id="unlike42" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(42,863)"  title="Comment" id="comment42" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    a cool spot</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan42" >
                         
                    </span>
                    <span id="commentscountspan42" ></span>
                    <span id="repincountspan42" >1 Repin 
                    </span>
                    <i class="loading_grid" id="loading_grid_42" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/30">Nature</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv42">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment42" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent42"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(42,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_41">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/41" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/alex_emily_20_12122016.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(41,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv41" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn41">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(41,863,0),disablelike(41,863,0))" title="Like" id="like41" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(41,863,1),disableunlike(41,863,0))" title="Unlike" id="unlike41" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(41,863)"  title="Comment" id="comment41" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    awesome snap</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan41" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan41" ></span>
                    <span id="repincountspan41" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_41" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/18">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv41">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment41" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent41"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(41,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_40">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/40" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/hello-glam-shepard-photo-fb652.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(40,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv40" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn40">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(40,863,0),disablelike(40,863,0))" title="Like" id="like40" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(40,863,1),disableunlike(40,863,0))" title="Unlike" id="unlike40" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(40,863)"  title="Comment" id="comment40" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    yellow</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan40" >
                        3 Likes 
                    </span>
                    <span id="commentscountspan40" ></span>
                    <span id="repincountspan40" >1 Repin 
                    </span>
                    <i class="loading_grid" id="loading_grid_40" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv40">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment40" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent40"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(40,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_38">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/38" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/38.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(38,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv38" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn38">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(38,863,0),disablelike(38,863,0))" title="Like" id="like38" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(38,863,1),disableunlike(38,863,0))" title="Unlike" id="unlike38" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(38,863)"  title="Comment" id="comment38" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    fight with me</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan38" >
                        3 Likes 
                    </span>
                    <span id="commentscountspan38" ></span>
                    <span id="repincountspan38" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_38" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/23">Sports and Art</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv38">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment38" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent38"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(38,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_37">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/37" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/220887556694322445_WAADxuS5_b85.jpeg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(37,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv37" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn37">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(37,863,0),disablelike(37,863,0))" title="Like" id="like37" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(37,863,1),disableunlike(37,863,0))" title="Unlike" id="unlike37" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(37,863)"  title="Comment" id="comment37" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    The banks of Llyn Cregennen, near Dolgellau, Wales, United Kingdom</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan37" >
                        2 Likes 
                    </span>
                    <span id="commentscountspan37" ></span>
                    <span id="repincountspan37" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_37" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/30">Nature</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv37">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment37" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent37"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(37,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_36">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/36" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/Most-amazing-and-dangerous-bike-stunts-by-riders-custom-motorcycles57.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(36,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv36" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn36">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(36,863,0),disablelike(36,863,0))" title="Like" id="like36" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(36,863,1),disableunlike(36,863,0))" title="Unlike" id="unlike36" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(36,863)"  title="Comment" id="comment36" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    bike stunt</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan36" >
                        1 Like 
                    </span>
                    <span id="commentscountspan36" ></span>
                    <span id="repincountspan36" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_36" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/23">Sports and Art</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv36">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment36" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent36"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(36,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_35">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/35" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/male-model-with-messy-hair50.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(35,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv35" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn35">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(35,863,0),disablelike(35,863,0))" title="Like" id="like35" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(35,863,1),disableunlike(35,863,0))" title="Unlike" id="unlike35" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(35,863)"  title="Comment" id="comment35" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    my sports</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan35" >
                        1 Like 
                    </span>
                    <span id="commentscountspan35" ></span>
                    <span id="repincountspan35" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_35" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/23">Sports and Art</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv35">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment35" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent35"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(35,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_33">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/33" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/cute-baby-girl58.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(33,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv33" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn33">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(33,863,0),disablelike(33,863,0))" title="Like" id="like33" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(33,863,1),disableunlike(33,863,0))" title="Unlike" id="unlike33" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(33,863)"  title="Comment" id="comment33" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    look me again</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan33" >
                        1 Like 
                    </span>
                    <span id="commentscountspan33" ></span>
                    <span id="repincountspan33" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_33" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/18">Me and Me</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv33">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment33" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent33"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(33,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_32">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/32" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/32" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/Cx1uUKIltBQ/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(32,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv32" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn32">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(32,863,0),disablelike(32,863,0))" title="Like" id="like32" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(32,863,1),disableunlike(32,863,0))" title="Unlike" id="unlike32" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(32,863)"  title="Comment" id="comment32" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    my city</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan32" >
                        1 Like 
                    </span>
                    <span id="commentscountspan32" ></span>
                    <span id="repincountspan32" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_32" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv32">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment32" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent32"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(32,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_30">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/30" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/124974958380022774_kCDtFw40_b63.jpeg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(30,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv30" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn30">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(30,863,0),disablelike(30,863,0))" title="Like" id="like30" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(30,863,1),disableunlike(30,863,0))" title="Unlike" id="unlike30" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(30,863)"  title="Comment" id="comment30" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    SOOOO cute!!!</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan30" >
                        1 Like 
                    </span>
                    <span id="commentscountspan30" ></span>
                    <span id="repincountspan30" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_30" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/148580_330133017095004_394573011_n728.jpg" title="Contus Tester" 
                                 alt="Contus Tester" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/728">Contus Tester</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/17">Animals</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv30">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment30" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent30"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(30,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_28">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/28" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/sport%2Bbikes%2Bwallpapers-133.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(28,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv28" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn28">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(28,863,0),disablelike(28,863,0))" title="Like" id="like28" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(28,863,1),disableunlike(28,863,0))" title="Unlike" id="unlike28" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(28,863)"  title="Comment" id="comment28" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    racer .,</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan28" >
                        1 Like 
                    </span>
                    <span id="commentscountspan28" ></span>
                    <span id="repincountspan28" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_28" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv28">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment28" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent28"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(28,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_25">
                <div class="pic  pic_show_functional">
                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/25" class="PinImage ImgLink facebox" >
                            <img src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/pin_medium/Michelle-Williams-Red-Carpet-Dresses-2012-440x65473.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(25,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv25" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn25">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(25,863,0),disablelike(25,863,0))" title="Like" id="like25" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(25,863,1),disableunlike(25,863,0))" title="Unlike" id="unlike25" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(25,863)"  title="Comment" id="comment25" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    red carpet.,</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan25" >
                        1 Like 
                    </span>
                    <span id="commentscountspan25" ></span>
                    <span id="repincountspan25" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_25" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/21">My Style</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv25">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment25" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent25"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(25,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
                        <div class="pin" id="pin_div_24">
                <div class="pic  pic_show_functional">
                                                <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/24" class="PinImage ImgLink facebox"  style="position: absolute;z-index: 1;top: 25%;left: 40%;">
                                <img src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/play_btn.png" width="50" height="50" alt="" class="play_button" /></a>
                                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/pin/24" class="PinImage ImgLink facebox" >
                            <img src="http://img.youtube.com/vi/3kughv1fsDI/0.jpg" alt="" class="PinImageImg"/>
                                                    </a>
                                            <div class="btns">
                                                <!-- Repin button for the all the user -->                        
                        <div class="btn-pinlist btn-repin">
                            <input type="button" onclick="getpin(24,'http://www.apptha-demo.com/extensions/socialpinboard/',863)" title="Repin" id="showrepindiv24" value="Repin" class="report_repin" />
                        </div>
                                                    <div class="btn-pinlist btn-like" id="likebtn24">
                              
                                <input type="button" class="pin_like" onclick="this.disabled=true; (getlike(24,863,0),disablelike(24,863,0))" title="Like" id="like24" style="display:block" value="Like" />
                                <input type="button" class="pin_unlike" onclick="this.disabled=true; (getlike(24,863,1),disableunlike(24,863,0))" title="Unlike" id="unlike24" style="display:none" value="Unlike" />
                            </div>
                                                    <!-- display the comment button -->
                        <div class="btn-pinlist btn-comment">
                            <input type="button" onclick="comment(24,863)"  title="Comment" id="comment24" value="Comment" />
                        </div>
                    </div>
                </div>
                <p class="description"> 
                    breath</p>
                                <div class="statistics" id="new_1">
                    <!-- Display the number of likes,comment and repins for each pin -->
                    <span id="likescountspan24" >
                        1 Like 
                    </span>
                    <span id="commentscountspan24" ></span>
                    <span id="repincountspan24" > 
                    </span>
                    <i class="loading_grid" id="loading_grid_24" style="display:none;"></i>
                </div>
                <div class="convo attribution clearfix">
                    <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">
                                                    <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/KanagaRajKadarkarai733.jpg" title="Stick Fighter" 
                                 alt="Stick Fighter" width="30" class="ImgLink thumb-img"/>
                                        </a>

                    <div class="board_grid board_content"> <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/733">Stick Fighter</a> onto <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boardpage/19">Favorite Places & Spaces</a></div>

                </div>
                <!-- display all the comments for each pin -->
                <div class="comments clearfix" id="commentDiv24">
                    <ul>
                                            </ul>
                                        <div class="write homecommentwrite" id="writecomment24" style="display:none">
                       <!-- to add the new comment -->
                        <div  class="newcomment">
                                                            <a href="/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863" class="ImgLink">
                                                                            <img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/MikeVihuela863.jpg" title="MikeVihuela"
                                             alt="MikeVihuela" width="30" />
                                                                             </a>       
                                <textarea id="commentContent24"  name="content" onfocus="if (value == 'Add a comment...') { value = ''; }"
                                          onblur="if (value == '') { value = 'Add a comment...'; }"  maxlength="200">Add a comment...</textarea>
                                <input type="button" class="button" onclick="doHomeComment(24,'Mike','Vihuela','MikeVihuela863.jpg','/extensions/socialpinboard/index.php/component/socialpinboard/boarddisplay/uid/863')" value="Comment" />
                                                        </div>

                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            
        </div>

<nav id="page-nav">
<a id="navpage" href="http://www.apptha-demo.com/extensions/socialpinboard/index.php?option=com_socialpinboard&amp;view=home&amp;tmpl=component&amp;page=1"></a>
</nav>
<script>
    function disablelike(a,b,c)
{
    var like = "unlike"+a;
    document.getElementById(like).disabled=false;
}
function disableunlike(a,b,c)
{
    var unlike = "like"+a;
    document.getElementById(unlike).disabled=false;
}
    var scr = jQuery.noConflict();  scr(document).ready(function($){
        scr('.facebox').facebox({
            loadingImage : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/loading.gif',
            closeImage   : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/closelabel.png',
            currentUrl    :document.location.href
        }
    );
        var $container = scr('#container');
    
        $container.masonry({
            itemSelector : '.pin',
		
            isFitWidth: true,
            isResizable: true,
            columnWidth: 200,
            gutterWidth: 40
        });
        $container.find('div.pin').filter('div.pin').each(function()
        {
            var pin = scr(this);

            var pinHeight = pin.height();

            function checkSize()
            {
                var currHeight = pin.height();

                if (pinHeight != currHeight) {
                    $container.masonry('reload', function(){
                        pinHeight = currHeight;
                        setTimeout(checkSize, 50);
                    });
                } else {
                    setTimeout(checkSize, 100);
                }
            }

            checkSize();
        });
        $container.infinitescroll({
            navSelector  : '#page-nav',    // selector for the paged navigation
            nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
            itemSelector : '#container div.pin',     // selector for all items you'll retrieve
            // extraScrollPx: 500,
            loading: {
                finishedMsg: 'No more pins to load.',
                img: 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/loading.gif'
            }
        },
        // trigger Masonry as a callback
        function( newElements ) {
            // hide new items while they are loading
            var $newElems = scr( newElements ).css({ opacity: 0 });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function(){
                // show elems now they're ready
                $newElems.animate({ opacity: 1 });
                $container.masonry( 'appended', $newElems, true );
                scr(document).bind('beforeReveal.facebox', function() {
                    scr("#facebox .content").empty();
                });
                scr('.facebox').facebox({
                    loadingImage : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/loading.gif',
                    closeImage   : 'http://www.apptha-demo.com/extensions/socialpinboard//components/com_socialpinboard/images/closelabel.png',
                    currentUrl    :document.location.href
                }
            );

            });
        }
    );

    });
// for showing and hiding the  new comment box
    function comment(pinId,userId) {
        if(userId==0)
        {
            window.open('?option=com_socialpinboard&view=people','_self');
            return false;
        }
        if(scr("#writecomment"+pinId).css('display')=="none"){
            scr(".homecommentwrite").hide();
            scr("#writecomment"+pinId).toggle();
        }else{
            scr(".homecommentwrite").hide();
        }
        scr("#commentContent"+pinId).focus();

        scr('#container').masonry( 'reload' );


    }
//do add the new comment
    function doHomeComment(pinId,firstName,lastName,userImage,userUrl) {

         document.getElementById('loading_grid_'+pinId).style.display='block';
        if(scr("#commentContent"+pinId).val()!="Add a comment..."&&scr("#commentContent"+pinId).val()!=""){
            scr.ajax({
                type:"POST",
                url:"?option=com_socialpinboard&view=ajaxcontrol&tmpl=component&task=getcommentinfo",
                data:{'pin_id':pinId,"comment":scr("#commentContent"+pinId).val()},
                success:function(message) {
                    document.getElementById('loading_grid_'+pinId).style.display='none';
                    var obj = jQuery.parseJSON(message);
                    var message = obj.comment;
                    var user_comment_id=obj.comment_id; 
                    scr("#commentContent"+pinId).val('Add a comment...');
                    if(message != "error") {

                        var message1 ='<li><div class="comment " ><a href="'+userUrl+'">';
                        if(userImage=='')
                        {
                            message1 += '<img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/components/com_socialpinboard/images/no_user.jpg" title="'+firstName+lastName+'"  alt="'+firstName+lastName+'" width="30" class="ImgLink thumb-img"></a>';
                                           
                        }else
                        {
                            message1 += '<img height="30" src="http://www.apptha-demo.com/extensions/socialpinboard/images/socialpinboard/avatars/'+userImage+'" title="'+firstName+lastName+'"  alt="'+firstName+lastName+'" width="30" class="ImgLink thumb-img"></a>';
                        }
                        message=message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                        message1 += '<p class="board_content"><a href="'+userUrl+'">'+firstName+' '+lastName+'</a>';
                        message1+=' '+'<span>'+message+'</span></p></div></li>';
                        scr('#commentDiv' + pinId + ' ul').append(message1);
                        
                        scr("#commentscountspan"+pinId).show();
                        scr('#container').masonry( 'reload' );
                        var span;
                        var count = 0;
                        if( scr("#commentscountspan"+pinId).text()){

                            count =parseInt(scr("#commentscountspan"+pinId).text().substring(0,scr("#commentscountspan"+pinId).text().indexOf(" ")))+1;
                            var counts =parseInt(scr("#commentsspan"+pinId).text().substring(0,scr("#commentscountspan"+pinId).text().indexOf(" ")))+1;
                            span = count+" Comments ";
                        }else{
                            span= "1 Comment ";
                        }
if(count==0)                        {
    
    //scr('.statistics').show();
}
                        scr("#commentscountspan"+pinId).text(span);
                        scr("#commentsspan"+pinId).text(counts);
                    }
                }
            });
        }
    }

                  
</script>
                                </div><!-- #ColumnContainer -->  
           </div><!-- #wrapper -->
           
</body>
</html>
ntsspan"+pinId).text(counts);
                    }
                }
            });
        }
    }

                  
</script>
                                </div><!-- #ColumnContainer -->  
           </div><!-- #wrapper -->
           
</body>
</html>

