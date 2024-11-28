(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scrollBarMargin":2,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"history":{},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player6522","textToSpeechConfig":{"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"displayTooltipInTouchScreens":true,"initialScale":0.5},"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"downloadFile":TDV.Tour.Script.downloadFile,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setValue":TDV.Tour.Script.setValue,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"clone":TDV.Tour.Script.clone,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"shareSocial":TDV.Tour.Script.shareSocial,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeJS":TDV.Tour.Script.executeJS,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizFinish":TDV.Tour.Script.quizFinish,"setLocale":TDV.Tour.Script.setLocale,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindow":TDV.Tour.Script.showWindow,"enableVR":TDV.Tour.Script.enableVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"createTween":TDV.Tour.Script.createTween,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"disableVR":TDV.Tour.Script.disableVR,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleVR":TDV.Tour.Script.toggleVR,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"existsKey":TDV.Tour.Script.existsKey,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"playAudioList":TDV.Tour.Script.playAudioList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openLink":TDV.Tour.Script.openLink,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"mixObject":TDV.Tour.Script.mixObject,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPixels":TDV.Tour.Script.getPixels,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz},"gap":10,"width":"100%","hash": "aa96ee594ea7e6ab5ab6de54628422d30d8c289c244c9aef06358827545e05f8", "definitions": [{"hfovMin":"150%","label":trans('panorama_63CECDB6_728D_DA84_41B9_1B96003A320F.label'),"overlays":["this.overlay_68D78206_728D_4984_41B8_B9A99AB99A52","this.overlay_6BD5D25A_728D_498C_41BE_5AA89BBCD44B"],"data":{"label":"M\u00f6kki terassi"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","url":"media/panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":7.16,"panorama":"this.panorama_638928CC_728D_5A84_41DC_36A8E3D301E8","backwardYaw":-36.41,"yaw":138.95,"class":"AdjacentPanorama","data":{"overlayID":"overlay_6BD5D25A_728D_498C_41BE_5AA89BBCD44B"},"select":"this.overlay_6BD5D25A_728D_498C_41BE_5AA89BBCD44B.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":3.58,"panorama":"this.panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B","backwardYaw":-106.91,"yaw":4.85,"class":"AdjacentPanorama","data":{"overlayID":"overlay_68D78206_728D_4984_41B8_B9A99AB99A52"},"select":"this.overlay_68D78206_728D_4984_41B8_B9A99AB99A52.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_t.jpg","id":"panorama_63CECDB6_728D_DA84_41B9_1B96003A320F"},{"initialPosition":{"yaw":-69,"pitch":-2.35,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_63BEF201_728D_497C_41C0_B946B3C39E6C","id":"panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_camera","class":"PanoramaCamera","enterPointingToHorizon":true},{"initialPosition":{"yaw":-145.82,"pitch":-15.68,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_63BEA200_728D_497C_41D9_3FEED7BFA829","id":"panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_camera","class":"PanoramaCamera","enterPointingToHorizon":true},{"toolTipTextShadowBlurRadius":1,"minHeight":25,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","progressBorderSize":0,"data":{"name":"Main Viewer"},"progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"vrPointerSelectionTime":2000,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","height":"100%","width":"100%","playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"playbackBarProgressBorderRadius":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","subtitlesBottom":50,"progressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"progressBorderRadius":2,"playbackBarHeadShadowBlurRadius":1.5,"progressLeft":"33%","progressRight":"33%","playbackBarLeft":0,"firstTransitionDuration":0,"class":"ViewerArea","playbackBarHeadShadowOpacity":0.7,"progressOpacity":0.7,"toolTipPaddingRight":3,"progressBarBackgroundColorDirection":"horizontal","vrThumbstickRotationStep":20,"subtitlesFontSize":"3vmin","id":"MainViewer_mobile","subtitlesTextShadowVerticalLength":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"subtitlesGap":0,"progressBarBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","toolTipFontColor":"#606060","subtitlesBackgroundOpacity":0.2,"toolTipPaddingLeft":3,"toolTipBorderRadius":1,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipShadowBlurRadius":1,"subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressBorderColor":"#000000","playbackBarBottom":5,"progressBarBackgroundColor":["#3399FF"],"propagateClick":false,"progressBackgroundColor":["#000000"],"progressBottom":10,"minWidth":50,"toolTipFontSize":"1.11vmin"},{"items":[{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B","camera":"this.panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_63CECDB6_728D_DA84_41B9_1B96003A320F","camera":"this.panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_638928CC_728D_5A84_41DC_36A8E3D301E8","camera":"this.panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList","id":"mainPlayList"},{"hfovMin":"150%","label":trans('panorama_638928CC_728D_5A84_41DC_36A8E3D301E8.label'),"overlays":["this.overlay_6BAAD7F7_728C_D684_41D6_B49439B7EE82"],"data":{"label":"8 m\u00f6kki"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","url":"media/panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":11.07,"panorama":"this.panorama_63CECDB6_728D_DA84_41B9_1B96003A320F","backwardYaw":138.95,"yaw":-36.41,"class":"AdjacentPanorama","data":{"overlayID":"overlay_6BAAD7F7_728C_D684_41D6_B49439B7EE82"},"select":"this.overlay_6BAAD7F7_728C_D684_41D6_B49439B7EE82.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_638928CC_728D_5A84_41DC_36A8E3D301E8_t.jpg","id":"panorama_638928CC_728D_5A84_41DC_36A8E3D301E8"},{"data":{"name":"IconButton14318"},"verticalAlign":"middle","width":25.5,"height":22.25,"backgroundOpacity":0,"horizontalAlign":"center","maxHeight":28,"maxWidth":28,"propagateClick":false,"tabIndex":0,"class":"IconButton","iconURL":"skin/IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F.png","left":"8.06%","minHeight":1,"bottom":"6.17%","id":"IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile","minWidth":1},{"toolTipTextShadowBlurRadius":1,"toolTipBackgroundColor":"#F6F6F6","mode":"toggle","right":"4.23%","data":{"name":"IconButton1493"},"toolTipFontColor":"#606060","toolTipPaddingLeft":3,"toolTipBorderRadius":1,"width":28,"height":17,"toolTipShadowColor":"#333333","backgroundOpacity":0,"transparencyActive":true,"toolTipShadowBlurRadius":1,"toolTipTextShadowColor":"#000000","horizontalAlign":"center","toolTipFontFamily":"Arial","toolTip":trans('IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile.toolTip'),"maxHeight":64,"toolTipBorderColor":"#767676","maxWidth":64,"propagateClick":false,"tabIndex":0,"class":"IconButton","iconURL":"skin/IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD.png","toolTipFontSize":6,"toolTipPaddingRight":3,"minWidth":1,"minHeight":1,"bottom":"6.24%","verticalAlign":"middle","id":"IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile"},{"class":"PanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"touchControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile","arrowKeysAction":"translate","id":"MainViewer_mobilePanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile"},{"label":trans('panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B.label'),"overlays":["this.overlay_6595CB9E_728F_5E84_41CB_3B8162C43104"],"data":{"label":"M\u00f6kki 2.2"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":8,"tags":"ondemand","url":"media/panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_0/{face}/0/{row}_{column}.jpg","colCount":48,"class":"TiledImageResourceLevel","height":4096,"width":24576},{"rowCount":4,"tags":"ondemand","url":"media/panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_0/{face}/1/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":7.6,"panorama":"this.panorama_63CECDB6_728D_DA84_41B9_1B96003A320F","backwardYaw":4.85,"yaw":-106.91,"class":"AdjacentPanorama","data":{"overlayID":"overlay_6595CB9E_728F_5E84_41CB_3B8162C43104"},"select":"this.overlay_6595CB9E_728F_5E84_41CB_3B8162C43104.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B_t.jpg","id":"panorama_6384D13E_728D_4B84_41DA_7F8DBE030C3B"},{"initialPosition":{"yaw":-174.52,"pitch":-0.31,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_63AB1200_728D_497C_41D9_17AF8589E63F","id":"panorama_63CECDB6_728D_DA84_41B9_1B96003A320F_camera","class":"PanoramaCamera","enterPointingToHorizon":true},{"data":{"label":"Circle Door 02","hasPanoramaAction":true},"enabledInCardboard":true,"items":[{"vfov":10.5,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Door 02"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_6DC50C31_72BD_D99C_41CC_2055A56E8F87","pitch":-25.38,"yaw":4.85,"hfov":10.5}],"areas":["this.HotspotPanoramaOverlayArea_68D1020A_728D_498C_41B2_6EA6162ADA2A"],"class":"HotspotPanoramaOverlay","id":"overlay_68D78206_728D_4984_41B8_B9A99AB99A52","useHandCursor":true,"maps":[]},{"data":{"label":"Circle 02c","hasPanoramaAction":true},"enabledInCardboard":true,"items":[{"vfov":2.33,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_6DC5CC31_72BD_D99C_41D1_536126B8EDE4","pitch":-13.34,"yaw":138.95,"hfov":10.5}],"areas":["this.HotspotPanoramaOverlayArea_6BFC225F_728D_4984_41D9_21673A900228"],"class":"HotspotPanoramaOverlay","id":"overlay_6BD5D25A_728D_498C_41BE_5AA89BBCD44B","useHandCursor":true,"maps":[]},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_63BEF201_728D_497C_41C0_B946B3C39E6C","class":"PanoramaCameraSequence"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_63BEA200_728D_497C_41D9_3FEED7BFA829","class":"PanoramaCameraSequence"},{"data":{"label":"Circle 02c","hasPanoramaAction":true},"enabledInCardboard":true,"items":[{"vfov":2.33,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_6DC5BC31_72BD_D99C_41C5_F3938305B60A","pitch":-8.72,"yaw":-36.41,"hfov":10.5}],"areas":["this.HotspotPanoramaOverlayArea_6BECA80A_728C_D98C_41CC_2F82012ED645"],"class":"HotspotPanoramaOverlay","id":"overlay_6BAAD7F7_728C_D684_41D6_B49439B7EE82","useHandCursor":true,"maps":[]},{"data":{"label":"Circle Door 02","hasPanoramaAction":true},"enabledInCardboard":true,"items":[{"vfov":10.5,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Door 02"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_6DC54C31_72BD_D99C_41C0_CBE711F63F1E","pitch":-12.6,"yaw":-106.91,"hfov":10.5}],"areas":["this.HotspotPanoramaOverlayArea_65066BCC_728F_5E84_41A0_B18DD10895A7"],"class":"HotspotPanoramaOverlay","id":"overlay_6595CB9E_728F_5E84_41CB_3B8162C43104","useHandCursor":true,"maps":[]},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_63AB1200_728D_497C_41D9_17AF8589E63F","class":"PanoramaCameraSequence"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_6DC50C31_72BD_D99C_41CC_2055A56E8F87","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_6896AC8D_728C_BA84_41D7_BCFE0F5A85C6_0.png","class":"ImageResourceLevel","height":200,"width":4800}]},{"id":"HotspotPanoramaOverlayArea_68D1020A_728D_498C_41B2_6EA6162ADA2A","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_6DC5CC31_72BD_D99C_41D1_536126B8EDE4","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_68966C8E_728C_BA84_41C2_8123C3FEEF46_0.png","class":"ImageResourceLevel","height":54,"width":5808}]},{"id":"HotspotPanoramaOverlayArea_6BFC225F_728D_4984_41D9_21673A900228","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_6DC5BC31_72BD_D99C_41C5_F3938305B60A","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_68966C8E_728C_BA84_41C2_8123C3FEEF46_0.png","class":"ImageResourceLevel","height":54,"width":5808}]},{"id":"HotspotPanoramaOverlayArea_6BECA80A_728C_D98C_41CC_2F82012ED645","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_6DC54C31_72BD_D99C_41C0_CBE711F63F1E","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_6896AC8D_728C_BA84_41D7_BCFE0F5A85C6_0.png","class":"ImageResourceLevel","height":200,"width":4800}]},{"id":"HotspotPanoramaOverlayArea_65066BCC_728F_5E84_41A0_B18DD10895A7","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"}],"children":["this.MainViewer_mobile","this.IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile","this.IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile"],"height":"100%","buttonToggleFullscreen":"this.IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile","layout":"absolute","backgroundColorRatios":[0],"watermark":false,"propagateClick":false,"class":"Player","backgroundColor":["#FFFFFF"],"minWidth":0,"scrollBarColor":"#000000","minHeight":0,"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Thu Nov 28 2024