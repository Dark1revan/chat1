/**
 *    This file is part of "PCPIN Chat 6".
 *
 *    "PCPIN Chat 6" is free software; you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation; either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    "PCPIN Chat 6" is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This file contains user records and functions
 */

/**
 * Initialize userlist object
 */
var UserList=new UserList();
UserList.initialize();


/**
 * Chat user object
 * @param   int       id                        User ID
 * @param   string    nickname                  Current nickname
 * @param   int       online_status             Online status
 * @param   int       online_status_message     Online status message
 * @param   boolean   muted_locally             TRUE, if user is muted locally
 * @param   boolean   global_muted              TRUE, if user is global muted
 * @param   int       global_muted_until        If user is global muted - mute expiration date (UNIX timestamp). Empty value means PERMANENT mute.
 * @param   string    ip_address                IP address
 * @param   string    gender                    Gender
 * @param   int       avatar_bid                Binaryfile ID of the first user's avatar
 * @param   boolean   is_admin                  TRUE, if user is chat Admin
 * @param   boolean   is_moderator              TRUE, if user is moderator of current room
 * @param   int       joined                    Join date (UNIX timestamp)
 * @param   int       last_visit                Last visit date (UNIX timestamp)
 * @param   int       time_online               Time spent online (seconds)
 * @param   boolean   banned                    TRUE, if user is banned
 * @param   int       banned_until              If user is global banned - mute expiration date (UNIX timestamp). Empty value means PERMANENT ban.
 * @param   string    ban_reason                If user banned: reason
 * @param   int       banned_by                 If user is banned - Who banned him? (User ID)
 * @param   int       banned_by_username        If user is banned - Who banned him? (Username)
 * @param   int       global_muted_by           If user is global muted - Who muted him? (User ID)
 * @param   int       global_muted_by_username  If user is global muted - Who muted him? (Username)
 * @param   string    global_muted_reason       If user global muted: reason
 * @param   boolean   is_guest                  TRUE, if user is guest
 */
function User(id, nickname, online_status, online_status_message, muted_locally, global_muted, global_muted_until, ip_address, gender, avatar_bid, is_admin, is_moderator, joined, last_visit, time_online, banned, banned_until, ban_reason, banned_by, banned_by_username, global_muted_by, global_muted_by_username, global_muted_reason, is_guest) {

  /**
   * User ID
   * @var   int
   */
  this.ID=stringToNumber(id);

  /**
   * Current nickname
   * @var   string
   */
  this.Nickname=nickname;

  /**
   * Current online status
   * @var   int
   */
  this.OnlineStatus=stringToNumber(online_status);

  /**
   * Current online status message
   * @var   int
   */
  this.OnlineStatusMessage=online_status_message;

  /**
   * Current "muted locally" status
   * @var   boolean
   */
  this.MutedLocally=muted_locally==true || muted_locally==1 || muted_locally=='1';

  /**
   * Current "global muted" status
   * @var   boolean
   */
  this.GlobalMuted=global_muted==true || global_muted==1 || global_muted=='1';

  /**
   * Global mute expiration date (UNIX timestamp)
   * @var   int
   */
  this.GlobalMutedUntil=stringToNumber(global_muted_until);

  /**
   * Global mute reason
   * @var   string
   */
  this.GlobalMutedReason=global_muted_reason;

  /**
   * IP address
   * @var   string
   */
  this.IP=ip_address;

  /**
   * Gender
   * @var   string
   */
  this.Gender=gender;

  /**
   * Binaryfile ID of the first user's avatar
   * @var   int
   */
  this.AvatarBID=avatar_bid;

  /**
   * Flag: TRUE if user is chat Admin
   * @var   boolean
   */
  this.IsAdmin=is_admin;

  /**
   * Flag: TRUE if user is moderator of current room
   * @var   boolean
   */
  this.IsModerator=is_moderator;

  /**
   * Join date (UNIX timestamp)
   * @var   int
   */
  this.Joined=joined;

  /**
   * Last visit date (UNIX timestamp)
   * @var   int
   */
  this.LastVisit=last_visit;

  /**
   * Time spent online in seconds
   * @var   int
   */
  this.TimeOnline=time_online;

  /**
   * Current "banned" status
   * @var   boolean
   */
  this.Banned=banned==true || banned==1 || banned=='1';

  /**
   * Ban expiration date (UNIX timestamp)
   * @var   int
   */
  this.BannedUntil=stringToNumber(banned_until);

  /**
   * If user banned: ban reason
   * @var   string
   */
  this.BanReason=ban_reason;

  /**
   * If user banned: who banned him (user ID)
   * @var   int
   */
  this.BannedBy=banned_by;

  /**
   * If user banned: who banned him (username)
   * @var   string
   */
  this.BannedByUsername=banned_by_username;

  /**
   * If user global muted: who muted him (user ID)
   * @var   int
   */
  this.GlobalMutedBy=global_muted_by;

  /**
   * If user global muted: who muted him (username)
   * @var   string
   */
  this.GlobalMutedByUsername=global_muted_by_username;

  /**
   * TRUE, if user is guest
   * @var   string
   */
  this.IsGuest=is_guest;



  /**
   * Get nickname (with color codes)
   * @return  string
   */
  this.getNickname=function() {
    return this.Nickname;
  }

  /**
   * Get online status code
   * @return  int
   */
  this.getOnlineStatus=function() {
    return this.OnlineStatus;
  }

  /**
   * Get online status message
   * @return  string
   */
  this.getOnlineStatusMessage=function() {
    return this.OnlineStatusMessage;
  }

  /**
   * Get local mute status
   * @return  boolean
   */
  this.getMutedLocally=function() {
    return this.MutedLocally;
  }

  /**
   * Get global mute status
   * @return  boolean
   */
  this.getGlobalMuted=function() {
    return this.GlobalMuted;
  }

  /**
   * Get global mute expiration time
   * @return  int
   */
  this.getGlobalMutedUntil=function() {
    return this.GlobalMutedUntil;
  }

  /**
   * Get IP address
   * @return  string
   */
  this.getIP=function() {
    return this.IP;
  }

  /**
   * Get gender
   * @return  string
   */
  this.getGender=function() {
    return this.Gender;
  }

  /**
   * Get binaryfile ID of the first user's avatar
   * @return  int
   */
  this.getAvatarBID=function() {
    return this.AvatarBID;
  }

  /**
   * Get admin flag
   * @return  boolean
   */
  this.getIsAdmin=function() {
    return this.IsAdmin;
  }

  /**
   * Get moderator flag
   * @return  boolean
   */
  this.getIsModerator=function() {
    return this.IsModerator;
  }

  /**
   * Get ban status
   * @return  boolean
   */
  this.getBanned=function() {
    return this.Banned;
  }




  /**
   * Set new online status code
   * @param   int   online_status   New online status code
   */
  this.setOnlineStatus=function(online_status) {
    this.OnlineStatus=online_status;
  }

  /**
   * Set new online status message
   * @param   string   online_status_message   New online status code
   */
  this.setOnlineStatusMessage=function(online_status_message) {
    this.OnlineStatusMessage=online_status_message;
  }

  /**
   * Set new local muted status
   * @param   int   muted   "1" if user muted, "0" otherwise
   */
  this.setMutedLocally=function(muted) {
    this.MutedLocally=muted==1 || muted=='1' || muted==true;
  }

  /**
   * Set new global muted status
   * @param   int     muted               "1" if user muted, "0" otherwise
   * @param   int     muted_until         Mute expiration time (UNIX timestamp)
   */
  this.setGlobalMuted=function(muted, muted_until) {
    if (typeof(muted_until)=='undefined') {
      muted_until=0;
    } else if (typeof(muted_until)!='number') {
      muted_until=stringToNumber(muted_until);
    }
    this.GlobalMuted=muted==1 || muted=='1' || muted==true;
    if (true==this.GlobalMuted) {
      if (typeof(muted_until)=='undefined') {
        muted_until=0;
      }
      this.GlobalMutedUntil=muted_until;
    } else {
      this.GlobalMutedUntil=0;
    }
  }


}


/**
 * Userlist object
 */
function UserList() {

  /**
   * User records
   * @var object
   */
  this.records=new Array();

  /**
   * User records archive
   * @var object
   */
  this.records_archive=new Array();

  /**
   * User records counter
   * @var int
   */
  this.recordsCount=0;


  /**
   * Reinitialize userlist object
   */
  this.initialize=function() {
    for (var i in this.records) {
      this.records_archive[this.records[i].ID]=this.records[i];
    }
    this.records=new Array();
    this.recordsCount=0;
    this.addRecord(0, 'SYSTEM', 1, '', false, false, 0, ''); // "SYSTEM" account
  }


  /**
   * Add new user record to the list
   * @param   int       id                        User ID
   * @param   string    nickname                  Current nickname
   * @param   int       online_status             Online status
   * @param   int       online_status_message     Online status message
   * @param   boolean   muted_locally             TRUE, if user is muted locally
   * @param   boolean   global_muted              TRUE, if user is global muted
   * @param   int       global_muted_until        If user is global muted - mute expiration date (UNIX timestamp). Empty value means PERMANENT mute.
   * @param   string    ip_address                IP address
   * @param   string    gender                    Gender
   * @param   int       avatar_bid                Binaryfile ID of the first user's avatar
   * @param   boolean   is_admin                  TRUE, if user is chat Admin
   * @param   boolean   is_moderator              TRUE, if user is moderator of current room
   * @param   int       joined                    Join date (UNIX timestamp)
   * @param   int       last_visit                Last visit date (UNIX timestamp)
   * @param   int       time_online               Time spent online (seconds)
   * @param   boolean   banned                    TRUE, if user is banned
   * @param   int       banned_until              If user is global banned - mute expiration date (UNIX timestamp). Empty value means PERMANENT ban.
   * @param   string    ban_reason                If user banned: reason
   * @param   int       banned_by                 If user is banned - Who banned him? (User ID)
   * @param   int       banned_by_username        If user is banned - Who banned him? (Username)
   * @param   int       global_muted_by           If user is global muted - Who muted him? (User ID)
   * @param   int       global_muted_by_username  If user is global muted - Who muted him? (Username)
   * @param   string    global_muted_reason       If user global muted: reason
   * @param   boolean   is_guest                  TRUE, if user is guest
   */
  this.addRecord=function(id, nickname, online_status, online_status_message, muted_locally, global_muted, global_muted_until, ip_address, gender, avatar_bid, is_admin, is_moderator, joined, last_visit, time_online, banned, banned_until, ban_reason, banned_by, banned_by_username, global_muted_by, global_muted_by_username, global_muted_reason, is_guest) {
    if (typeof(id)=='string') {
      id=stringToNumber(id);
    }
    if (typeof(online_status)=='string') {
      online_status=stringToNumber(online_status);
    }
    if (typeof(muted)!='boolean') {
      muted=false;
    }
    if (typeof(global_muted)!='boolean' || false==global_muted) {
      global_muted=false;
      global_muted_until=0;
    } else {
      if (typeof(global_muted_until)=='undefined') {
        global_muted_until=0;
      } else if (typeof(global_muted_until)!='number') {
        global_muted_until=stringToNumber(global_muted_until);
      }
    }
    if (typeof(ip_address)!='string') {
      ip_address='';
    }
    if (typeof(gender)!='string' || gender=='') {
      gender='-';
    }
    if (typeof(avatar_bid)!='number') {
      if (typeof(avatar_bid)=='string') {
        avatar_bid=stringToNumber(avatar_bid);
      } else {
        avatar_bid=0;
      }
    }
    if (typeof(is_admin)!='boolean') {
      is_admin=false;
    }
    if (typeof(is_moderator)!='boolean') {
      is_moderator=false;
    }
    if (typeof(joined)=='undefined') {
      joined=0;
    } else if (typeof(joined)!='number') {
      joined=stringToNumber(joined);
    }
    if (typeof(last_visit)=='undefined') {
      last_visit=0;
    } else if (typeof(last_visit)!='number') {
      last_visit=stringToNumber(last_visit);
    }
    if (typeof(time_online)=='undefined') {
      time_online=0;
    } else if (typeof(time_online)!='number') {
      time_online=stringToNumber(time_online);
    }
    if (typeof(banned) !='boolean') {
      banned=false;
    }
    if (typeof(banned_until)=='undefined') {
      banned_until=0;
    } else if (typeof(banned_until)!='number') {
      banned_until=stringToNumber(banned_until);
    }
    if (typeof(banned_by)=='undefined') {
      banned_by=0;
    } else if (typeof(banned_by)!='number') {
      banned_by=stringToNumber(banned_by);
    }
    if (typeof(banned_by_username)!='string') {
      banned_by_username='';
    }
    if (typeof(global_muted_by)=='undefined') {
      global_muted_by=0;
    } else if (typeof(global_muted_by)!='number') {
      global_muted_by=stringToNumber(global_muted_by);
    }
    if (typeof(global_muted_by_username)!='string') {
      global_muted_by_username='';
    }
    if (typeof(global_muted_reason)!='string') {
      global_muted_reason='';
    }
    if (typeof(is_guest)!='boolean') {
      is_guest=false;
    }
    if (typeof(this.records[id])!='object' || this.records[id]==null) {
      this.records[id]=new User(id, nickname, online_status, online_status_message, muted_locally, global_muted, global_muted_until, ip_address, gender, avatar_bid, is_admin, is_moderator, joined, last_visit, time_online, banned, banned_until, ban_reason, banned_by, banned_by_username, global_muted_by, global_muted_by_username, global_muted_reason, is_guest);
      this.recordsCount++;
    }
  }


  /**
   * Get user record referenced by ID
   * @param   int       id        User ID
   * @return  object
   */
  this.getRecord=function(id) {
    if (typeof(id)=='string') {
      id=stringToNumber(id);
    }
    var rec=null;
    if (typeof(id)=='number' && id>0) {
      if (this.records[id]) {
        // Return current record
        rec=this.records[id];
      } else if (this.records_archive[id]) {
        // Return archived record
        rec=this.records_archive[id];
      }
    }
    return rec;
  }


  /**
   * Return all records from this.records list
   * @return  array
   */
  this.getAllRecords=function() {
    var recs=new Array();
    for (var i in this.records) {
      if (i!=0) {
        recs[i]=this.records[i];
      }
    }
    return recs;
  }


  /**
   * Find exactly one user record by plain nickname
   * @param   string      nickname_plain    Plain nickname or part of it.
   * @param   boolean     match_case        DEPRECATED AND IGNORED, always FALSE.
   * @param   boolean     strict            If TRUE: nickname (plain) must be exactly equal to supplied
   *                                        nickname_plain argument. Default: FALSE.
   * @return  mixed   (object) user record if *exactly* one user found
   *                  (boolean) FALSE if more than one user found
   *                  (NULL) NULL if no users found
   */
  this.findRecordByNickname=function(nickname_plain, match_case, strict) {
    var result=null;
    var plain='';
    if (typeof(strict)!='boolean') {
      strict=false;
    }
    if (typeof(nickname_plain)=='string' && nickname_plain!='') {
      nickname_plain=nickname_plain.toLowerCase();
      for (var id in this.records) {
        plain=coloredToPlain(this.records[id].Nickname).toLowerCase();
        if (true==strict) {
          // Strict mode
          if (plain==nickname_plain) {
            // Record found
            result=this.records[id];
            break;
          }
        } else {
          if (plain.indexOf(nickname_plain)>=0) {
            // Record found
            if (result==null) {
              result=this.records[id];
            } else {
              result=false;
              break;
            }
          }
        }
      }
    }
    return result;
  }


  /**
   * Find exactly one user record by enclosed into doublequotes " plain nickname contained in a specified string
   * @param   string      search_str        String that contain a nickname
   * @param   boolean     match_case        DEPRECATED AND IGNORED, always FALSE.
   * @param   boolean     strict            If TRUE: nickname (plain) must be exactly equal to supplied
   *                                        nickname_plain argument. Default: FALSE.
   * @return  mixed   (object) user record if *exactly* one user found
   *                  (boolean) FALSE if more than one user found
   *                  (NULL) NULL if no users found
   */
  this.findRecordByNicknameInString=function(search_str, match_case, strict) {
    var result=null;
    if (typeof(strict)!='boolean') {
      strict=null;
    }
    if (typeof(search_str)=='string' && search_str!='') {
      var parts=search_str.split('"');
      if (parts.length>=3) {
        parts.pop();
        parts.shift();
        do {
          if (null==(result=this.findRecordByNickname(parts.join('"'), true, strict))) {
            parts.pop();
          }
        } while (result==null && parts.length>0);
      }
    }
    return result;
  }
/**
 *    This file is part of "PCPIN Chat 6".
 *
 *    "PCPIN Chat 6" is free software; you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation; either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    "PCPIN Chat 6" is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Array containing user data
 * @var array
 */
var UserData=new Array();

/**
 * Array containing user avatars
 * @var array
 */
var UserAvatars=new Array();

/**
 * Maximum allowed avatars number
 * @var int
 */
var AvatarsMaxCount=0;


/**
 * Initialize profile
 * @param   int       user_id               User ID
 * @param   int       avatars_max_count     How many avatars are allowed?
 */
function initProfilePublic(user_id, avatars_max_count) {
  AvatarsMaxCount=avatars_max_count;
  // Get profile data
  getPublicProfileData(user_id);
  // Get focus
  window.focus();
}


/**
 * Get profile data
 * @param   int   user_id     User ID
 */
function getPublicProfileData(user_id) {
  if (typeof(user_id)=='number' && user_id>0) {
    toggleProgressBar(true);
    sendData('_CALLBACK_getPublicProfileData('+user_id+')',
             formlink,
             'POST',
             'ajax=get_memberlist'
             +'&s_id='+urlencode(s_id)
             +'&user_ids='+urlencode(user_id)
             +'&load_custom_fields=1'
             );
  }
}
function _CALLBACK_getPublicProfileData(user_id) {
//debug(actionHandler.getResponseString()); return false;
  toggleProgressBar(false);
  var custom_field_name='';

  if (actionHandler.status==-1) {
    // Session is invalid
    document.location.href=formlink+'?session_timeout';
    return false;
  } else {
    if (actionHandler.data['member'].length) {
      for (var i in actionHandler.data['member'][0]) {
        if (i=='custom_field') {
          UserData['custom_field']=new Array();
          for (var ii=0; ii<actionHandler.data['member'][0]['custom_field'].length; ii++) {
            custom_field_name=actionHandler.data['member'][0]['custom_field'][ii]['name'][0];
            UserData['custom_field'][custom_field_name]=new Array();
            for (var iii in actionHandler.data['member'][0]['custom_field'][ii]) {
              UserData['custom_field'][custom_field_name][iii]=actionHandler.data['member'][0]['custom_field'][ii][iii][0];
            }
            UserData['custom_field'][custom_field_name]['id']=parseInt(UserData['custom_field'][custom_field_name]['id']);
          }
        } else {
          UserData[i]=actionHandler.data['member'][0][i][0];
        }
      }
    }
  }
  // Load avatars
  getUserAvatars(user_id);
}


/**
 * Get user avatars
 * @param user_id
 */
function getUserAvatars(user_id) {
  if (AvatarsMaxCount>0) {
    toggleProgressBar(true);
    sendData('_CALLBACK_getUserAvatars('+user_id+')',
             formlink,
             'POST',
             'ajax=get_avatars'
             +'&s_id='+urlencode(s_id)
             +'&profile_user_id='+urlencode(user_id)
             );
  } else {
    _CALLBACK_getUserAvatars(user_id);
  }
}
function _CALLBACK_getUserAvatars(user_id) {
//debug(actionHandler.getResponseString()); return false;
  toggleProgressBar(false);
  var avatar=null;

  if (actionHandler.status==-1) {
    // Session is invalid
    document.location.href=formlink+'?session_timeout';
    return false;
  } else {
    if (typeof(actionHandler.data['avatar'])!='undefined') {
      for (var i=0; i<actionHandler.data['avatar'].length; i++) {
        avatar=new Array();
        for (var ii in actionHandler.data['avatar'][i]) {
          avatar[ii]=actionHandler.data['avatar'][i][ii][0];
        }
        UserAvatars.push(avatar);
      }
    }
  }
  // Display profile
  displayPublicProfile(user_id);
}


/**
 * Show public profile data
 */
function displayPublicProfile(user_id) {
  var online_seconds=0;
  var online_days=0;
  var online_hours=0;
  var online_minutes=0;
  var online_time_html='';
  var profile_fields_tbl=$('profile_table').tBodies[0];;
  var custom_field_tr_tpl=$('contents_profile_data_custom_field_tr_tpl');
  var custom_field_tr=null;
  var profile_fields_tbl_last_row=$('profile_fields_tbl_last_row');
  var avatar=null;
  var avatar_id=0;
  var avatar_binaryfile_id=0;
  var avatar_width=0;
  var avatar_height=0;


  // Set window title
  document.title=getLng('users_profile').split('[USER]').join(UserData['nickname_plain']);
  $('profile_header').innerHTML=htmlspecialchars(getLng('users_profile').split('[USER]').join(UserData['nickname_plain']));
  // Show nickname
  $('contents_profile_data_nickname').innerHTML='<b>'+coloredToHTML(UserData['nickname'])+'</b>'+(UserData['is_guest']=='1'? ' ('+htmlspecialchars(getLng('guest'))+')' : '');
  // Show registration date
  $('contents_profile_data_regdate_row').style.display=UserData['is_guest']=='1'? 'none' : '';
  // Calculate time spent online
  online_seconds=parseInt(UserData['time_online']);
  online_days=Math.floor(online_seconds/86400);
  online_seconds-=online_days*86400;
  online_hours=Math.floor(online_seconds/3600);
  online_seconds-=online_hours*3600;
  online_minutes=Math.floor(online_seconds/60);
  online_seconds-=online_minutes*60;

  online_time_html=online_seconds+' '+getLng('seconds');
  if (online_minutes>0 || online_hours>0 || online_days>0) {
    online_time_html=online_minutes+' '+getLng('minutes')+', '+online_time_html;
    if (online_hours>0 || online_days>0) {
      online_time_html=online_hours+' '+getLng('hours')+', '+online_time_html;
      if (online_days>0) {
        online_time_html=online_days+' '+getLng('days')+', '+online_time_html;
      }
    }
  }
  
  $('contents_profile_data_registration_date').innerHTML=htmlspecialchars(date(dateFormat, UserData['joined']));
  $('contents_profile_data_online_time').innerHTML=htmlspecialchars(online_time_html);
  if (UserData['is_guest']=='0' && user_id==currentUserId || UserData['hide_email']=='0') {
    $('contents_profile_data_email').innerHTML='<div title="'+htmlspecialchars(getLng('email_address'))+': '+htmlspecialchars(UserData['email'])+'"><a href="'+formlink+'?external_url='+urlencode('mailto:'+UserData['email'])+'" target="_blank">'+htmlspecialchars(UserData['email'])+'</a></div>';
    $('contents_profile_data_email_row').style.display='';
  }

  // Display custom profile fields
  if (typeof(UserData['custom_field'])=='object' && UserData['custom_field']) {
    // Clean up table
    if (typeof(profile_fields_tbl.original_rows_count)!='number') {
      profile_fields_tbl.original_rows_count=profile_fields_tbl.rows.length;
    } else {
      while (profile_fields_tbl.rows.length>profile_fields_tbl.original_rows_count) {
        profile_fields_tbl.deleteRow(profile_fields_tbl.rows.length-2);
      }
    }
    for (var i in UserData['custom_field']) {
      if (UserData['custom_field'][i]['field_value']!='') {
        custom_field_tr=custom_field_tr_tpl.cloneNode(true);
        custom_field_tr.id='custom_field_'+i;
        profile_fields_tbl.insertBefore(custom_field_tr, profile_fields_tbl_last_row);
        custom_field_tr.cells[0].innerHTML=htmlspecialchars(UserData['custom_field'][i]['name_translated'])+': ';
        custom_field_tr.cells[1].innerHTML=makeCustomDataFieldHTML(UserData['custom_field'][i]);
        custom_field_tr.style.display='';
      }
    }
  }

  // Display avatars
  if (UserAvatars.length>0) {
    $('avatars_row').style.display='';
    $('avatar_image').innerHTML='';
    $('avatar_thumbs').innerHTML='';
    for (var avatar_nr=0; avatar_nr<UserAvatars.length; avatar_nr++) {
      avatar=UserAvatars[avatar_nr];
      avatar_id=stringToNumber(avatar['id']);
      avatar_binaryfile_id=stringToNumber(avatar['binaryfile_id']);
      avatar_width=stringToNumber(avatar['width']);
      avatar_height=stringToNumber(avatar['height']);
      if (avatar_nr==0) {
        // First avatar
        $('avatar_image').innerHTML='<img id="avatar_img" onload="setTimeout(\'resizeForDocumentHeight(10)\', 200);" src="'+htmlspecialchars(formlink)+'?b_id='+htmlspecialchars(avatar_binaryfile_id)+'&amp;s_id='+htmlspecialchars(s_id)+'&amp;b_x=120&amp;b_y=100" border="0" alt="'+htmlspecialchars(getLng('avatar'))+'" title="'+htmlspecialchars(getLng('avatar'))+'" style="cursor:pointer" />';
        $('avatar_img').binaryfile_id=avatar_binaryfile_id;
        $('avatar_img').ow_width=avatar_width;
        $('avatar_img').ow_height=avatar_height;
      }
      // Display thumb
      $('avatar_thumbs').innerHTML+='<img style="cursor:pointer" id="avatar_thumb_'+htmlspecialchars(avatar_id)+'" src="'+formlink+'?b_id='+htmlspecialchars(avatar_binaryfile_id)+'&amp;s_id='+htmlspecialchars(s_id)+'&amp;b_x=50&amp;b_y=43'+'" border="0" alt="'+htmlspecialchars(getLng('avatar'))+'" title="'+htmlspecialchars(getLng('avatar'))+'" onmouseover="$(\'avatar_img\').onload=\'\'; $(\'avatar_img\').src=\''+formlink+'?b_id='+htmlspecialchars(avatar_binaryfile_id)+'&amp;s_id='+htmlspecialchars(s_id)+'&amp;b_x=120&amp;b_y=100'+'\'; $(\'avatar_img\').binaryfile_id='+htmlspecialchars(avatar_binaryfile_id)+'; $(\'avatar_img\').ow_width='+htmlspecialchars(avatar_width)+'; $(\'avatar_img\').ow_height='+htmlspecialchars(avatar_height)+';" onclick="$(\'avatar_img\').onclick()" />'
                                  + '<img src="./pic/clearpixel_1x1.gif" width="5" height="1" alt="" />';
      $('avatar_img').onclick=function() {
        openWindow(formlink+'?inc=show_image&img_b_id='+this.binaryfile_id+'&s_id='+s_id, '', this.ow_width, this.ow_height, false, false, false, false, true);
        return false;
      };
    }
    if (UserAvatars.length==1) {
      // There is only one avatar. Hide thumb.
      $('avatar_thumb_'+htmlspecialchars(avatar_id)).style.display='none';
    }
  }

  // Online status
  if (UserData['online_status']!='0') {
    $('profile_online_status').innerHTML=htmlspecialchars(getLng('user_is_logged_in')).split('[USER]').join('<b>'+coloredToHTML(UserData['nickname'])+'</b>');
  } else {
    $('profile_online_status').innerHTML=htmlspecialchars(getLng('user_is_not_logged_in')).split('[USER]').join('<b>'+coloredToHTML(UserData['nickname'])+'</b>');
  }

  // "Invite" button
  if (UserData['invitable']=='1') {
    $('invite_user').style.display='';
    $('invite_button').title=getLng('invite_user_to_your_room').split('[USER]').join(UserData['nickname_plain']);
    $('invite_button').innerHTML=htmlspecialchars(getLng('invite_user_to_your_room').split('[USER]').join(UserData['nickname_plain']));
    $('invite_button').tgt_user_id=user_id;
    $('invite_button').onclick=function() {
      sendInvitation(this.tgt_user_id);
    }
  }


  $('profile_table').style.display='';
  $('close_window_btn_div').style.display='';
  setTimeout('resizeForDocumentHeight(10, false)', 200);
}


/**
 * Create HTML contents for custom field
 * @param   object    custom_field_data     Custom field data
 * @return string
 */
function makeCustomDataFieldHTML(custom_field_data) {
  var html='';
  var choices=null;
  var values=null;
  var choice_text='';
  var editable=custom_field_data['writeable']=='user' || isAdmin;
  var option_background_image='';
  var option_padding='';
  switch (custom_field_data['type']) {

    default:
      html+='<div title="'+htmlspecialchars(custom_field_data['name_translated'])+'">'+htmlspecialchars(custom_field_data['field_value'])+'</div>';
    break;

    case 'url':
      html+='<div title="'+htmlspecialchars(custom_field_data['name_translated'])+': '+htmlspecialchars(custom_field_data['field_value'])+'"><a href="'+formlink+'?external_url='+urlencode(custom_field_data['field_value'])+'" target="_blank">'+htmlspecialchars(custom_field_data['field_value'])+'</a></div>';
    break;

    case 'email':
      html+='<div title="'+htmlspecialchars(custom_field_data['name_translated'])+': '+htmlspecialchars(custom_field_data['field_value'])+'"><a href="'+formlink+'?external_url='+urlencode('mailto:'+custom_field_data['field_value'])+'" target="_blank">'+htmlspecialchars(custom_field_data['field_value'])+'</a></div>';
    break;
    
    case 'text':
    case 'multichoice':
      html+='<div title="'+htmlspecialchars(custom_field_data['name_translated'])+'">'+nl2br(htmlspecialchars(custom_field_data['field_value']))+'</div>';
    break;

    case 'choice':
      if (custom_field_data['name']=='gender' && custom_field_data['custom']=='n') {
        html+='<div><img src="./pic/gender_'+htmlspecialchars(custom_field_data['field_value'])+'_10x10.gif" title="'+htmlspecialchars(getLng('gender_'+custom_field_data['field_value']))+'" alt="'+htmlspecialchars(getLng('gender_'+custom_field_data['field_value']))+'" /> '+htmlspecialchars(getLng('gender_'+custom_field_data['field_value']))+'</div>';
      } else {
        html+='<div title="'+htmlspecialchars(custom_field_data['name_translated'])+'">'+htmlspecialchars(custom_field_data['field_value'])+'</div>';
      }
    break;

  }
  return html;
}


}
