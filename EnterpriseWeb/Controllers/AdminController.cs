using EnterpriseWeb.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EnterpriseWeb.Controllers
{
    public class AdminController : Controller
    {
        EntityDB entity = new EntityDB();
        public ActionResult Index()
        {
            return View();
        }
        #region 导航管理
        public ActionResult NavList()
        {
            return View();
        }
        public ActionResult NavList_Get()
        {
            var query = entity.nav.OrderBy(p => p.sort);
            return Json(query, JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 单页管理
        public ActionResult PageList()
        {
            return View();
        }
        public ActionResult PageList_Get()
        {
            var query = entity.nav.OrderBy(p => p.sort);
            return Json(query, JsonRequestBehavior.AllowGet);
        }
        public ActionResult PageAdd()
        {
            return View();
        }
        #endregion
    }
}