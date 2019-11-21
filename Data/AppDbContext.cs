using ExpenseAPIframework.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ExpenseAPIframework.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base ("name=ExpensesDb")
        {

        }
        public DbSet<Entry> Entries { get; set; }
        public DbSet<User> Users { get; set; }
    }
}